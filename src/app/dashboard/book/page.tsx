'use client';

export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const SERVICE_OPTIONS = [
  'Pest Control',
  'Fumigation',
  'Deep Cleaning',
  'Rodent Control',
  'Lawn Treatment',
  'Commercial Services',
];

export default function BookingPage() {
  const router = useRouter();

  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await fetch('/api/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ service, date, location, phone }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Something went wrong.');
        setLoading(false);
        return;
      }

      setSuccess(true);
      setTimeout(() => router.push('/dashboard'), 2000);

    } catch (err) {
      console.error(err);
      setError('Network error. Please check your connection.');
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center px-4">
        <div className="text-center">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-white font-bold text-2xl mb-2">Booking Confirmed!</h2>
          <p className="text-white/50 text-sm">Redirecting to your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black pt-24 px-4 pb-16">
      <div className="max-w-xl mx-auto">
        <a
          href="/dashboard"
          className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm mb-8 transition-colors"
        >
          ← Back to Dashboard
        </a>

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white">Book a Service</h1>
          <p className="text-white/40 text-sm mt-2">
            Fill in the details below and we will confirm your booking shortly.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* Service */}
            <div>
              <label className="text-white/60 text-sm mb-2 block">
                Select Service
              </label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                required
                className="w-full bg-black border border-white/10 focus:border-green-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
              >
                <option value="" disabled>Choose a service...</option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s} className="bg-black">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            {/* Date */}
            <div>
              <label className="text-white/60 text-sm mb-2 block">
                Preferred Date
              </label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                min={today}
                className="w-full bg-black border border-white/10 focus:border-green-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-white/60 text-sm mb-2 block">
                Phone Number
              </label>
              <div className="flex gap-2">
                <div className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white/60 text-sm flex items-center flex-shrink-0">
                  🇰🇪 +254
                </div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                  required
                  placeholder="712 345 678"
                  maxLength={9}
                  className="flex-1 bg-black border border-white/10 focus:border-green-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-white/20"
                />
              </div>
              <p className="text-white/30 text-xs mt-1">
                Enter 9 digits without the leading 0
              </p>
            </div>

            {/* Location */}
            <div>
              <label className="text-white/60 text-sm mb-2 block">
                Your Location / Address
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                placeholder="e.g. Westlands, Nairobi"
                minLength={5}
                maxLength={200}
                className="w-full bg-black border border-white/10 focus:border-green-500/50 rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors placeholder:text-white/20"
              />
            </div>

            {/* Summary */}
            {service && date && phone && location && (
              <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-4">
                <p className="text-green-400 text-xs font-semibold uppercase tracking-widest mb-3">
                  Booking Summary
                </p>
                <div className="flex flex-col gap-1">
                  <p className="text-white/60 text-sm">Service: <span className="text-white">{service}</span></p>
                  <p className="text-white/60 text-sm">Date: <span className="text-white">{date}</span></p>
                  <p className="text-white/60 text-sm">Phone: <span className="text-white">+254{phone}</span></p>
                  <p className="text-white/60 text-sm">Location: <span className="text-white">{location}</span></p>
                </div>
              </div>
            )}

            {/* Error */}
            {error && (
              <p className="text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-3">
                {error}
              </p>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-500 hover:bg-green-400 disabled:opacity-50 disabled:cursor-not-allowed text-black font-bold py-3 rounded-xl transition-all"
            >
              {loading ? 'Submitting...' : 'Confirm Booking'}
            </button>

          </form>
        </div>
      </div>
    </div>
  );
}