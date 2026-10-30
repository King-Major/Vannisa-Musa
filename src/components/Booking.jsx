import { useState } from 'react';
import { site, endpoints } from '../config.js';
import { submitForm } from '../lib/submit.js';

const HOURLY_RATE = 100;
const TIME_SLOTS = ['09:00', '11:00', '13:00', '15:00'];
const WEEKDAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function formatTime(time) {
  return new Date(`2000-01-01T${time}:00`).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
  });
}

export default function Booking() {
  const [state, setState] = useState('idle');
  const [visibleMonth, setVisibleMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1);
  });
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [hours, setHours] = useState('');

  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const monthStart = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), 1);
  const daysInMonth = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth() + 1, 0).getDate();
  const leadingDays = (monthStart.getDay() + 6) % 7;
  const total = hours ? Number(hours) * HOURLY_RATE : 0;
  const bookingReady = Boolean(selectedDate && selectedTime && hours);

  function changeMonth(offset) {
    setVisibleMonth((month) => new Date(month.getFullYear(), month.getMonth() + offset, 1));
  }

  function chooseDate(date) {
    setSelectedDate(dateKey(date));
    setSelectedTime('');
    setHours('');
  }

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    setState('sending');
    if (!endpoints.booking) {
      const body = encodeURIComponent(
        `Name: ${data.name}\nEmail: ${data.email}\nDate: ${data.date}\nTime: ${formatTime(data.time)}\nSession length: ${data.hours} hour(s)\nRate: $${data.rate}/hour\nTotal: $${data.total}\n\nChallenge:\n${data.challenge}`,
      );
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent('Booking request: ' + data.date)}&body=${body}`;
      setState('idle');
      return;
    }
    const res = await submitForm(endpoints.booking, data);
    setState(res.ok ? 'done' : 'error');
  }

  return (
    <section className="section section-dark booking-section" id="book" aria-labelledby="book-h">
      <div className="wrap booking-wrap">
        <h2 id="book-h">Ready? Let&apos;s build.</h2>
        <p className="booking-intro">Pick a time, share your challenge, and show up ready to work.</p>
        {state === 'done' ? (
          <p className="success" role="status">
            Thank you! Your booking request has been received and you&apos;ll hear back soon.
          </p>
        ) : (
          <form className="booking-form" onSubmit={onSubmit}>
            <div className="booking-calendar">
              <p className="booking-label">Select a date</p>
              <div className="calendar-month">
                <button
                  type="button"
                  className="month-nav"
                  aria-label="Previous month"
                  disabled={
                    visibleMonth.getFullYear() === today.getFullYear() &&
                    visibleMonth.getMonth() === today.getMonth()
                  }
                  onClick={() => changeMonth(-1)}
                >
                  ←
                </button>
                <h3 aria-live="polite">
                  {visibleMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                </h3>
                <button type="button" className="month-nav" aria-label="Next month" onClick={() => changeMonth(1)}>
                  →
                </button>
              </div>
              <div className="calendar-grid" role="group" aria-label="Choose a booking date">
                {WEEKDAYS.map((day) => (
                  <span className="calendar-weekday" key={day} aria-hidden="true">
                    {day}
                  </span>
                ))}
                {Array.from({ length: leadingDays }, (_, index) => (
                  <span className="calendar-empty" key={`empty-${index}`} aria-hidden="true" />
                ))}
                {Array.from({ length: daysInMonth }, (_, index) => {
                  const date = new Date(visibleMonth.getFullYear(), visibleMonth.getMonth(), index + 1);
                  const key = dateKey(date);
                  const isPast = date < today;
                  return (
                    <button
                      type="button"
                      className={'calendar-day' + (selectedDate === key ? ' selected' : '')}
                      key={key}
                      disabled={isPast}
                      aria-pressed={selectedDate === key}
                      aria-label={date.toLocaleDateString('en-US', {
                        weekday: 'long',
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                      onClick={() => chooseDate(date)}
                    >
                      {index + 1}
                    </button>
                  );
                })}
              </div>
              {selectedDate && (
                <div className="booking-options">
                  <label>
                    Available time
                    <select name="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} required>
                      <option value="">Choose a time</option>
                      {TIME_SLOTS.map((time) => (
                        <option key={time} value={time}>
                          {formatTime(time)}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Session length
                    <select name="hours" value={hours} onChange={(e) => setHours(e.target.value)} required>
                      <option value="">Choose hours</option>
                      {[1, 2, 3].map((duration) => (
                        <option key={duration} value={duration}>
                          {duration} {duration === 1 ? 'hour' : 'hours'}
                        </option>
                      ))}
                    </select>
                  </label>
                </div>
              )}
            </div>

            <div className="booking-details">
              <label>
                Full name
                <input name="name" required autoComplete="name" />
              </label>
              <label>
                Email address
                <input name="email" type="email" required autoComplete="email" />
              </label>
              <label>
                What&apos;s your biggest challenge right now?
                <textarea
                  name="challenge"
                  rows="5"
                  required
                  placeholder="Be specific — the more context, the more valuable our session."
                />
              </label>
              <input type="hidden" name="date" value={selectedDate} />
              <input type="hidden" name="rate" value={HOURLY_RATE} />
              <input type="hidden" name="total" value={total} />
              <p className="booking-summary" aria-live="polite">
                SESSION: {hours || '-'} HOURS <span>|</span> RATE: ${HOURLY_RATE}/HR <span>|</span> TOTAL: ${total}
              </p>
              <button className="booking-submit" type="submit" disabled={!bookingReady || state === 'sending'}>
                {state === 'sending' ? 'Sending...' : `Book & confirm · $${total}`}
              </button>
              <p className="booking-hint">
                {bookingReady ? 'Your session request is ready.' : 'Select a date and time above to continue.'}
              </p>
              {state === 'error' && (
                <p className="error" role="alert">
                  Something went wrong. Please try again or email {site.email}.
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
