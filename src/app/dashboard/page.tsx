import { redirect } from 'next/navigation';
import { createServerSupabaseClient } from '@/lib/supabase/server';
import BookNowButton from '../components/ui/BookNowButton';

export default async function DashboardPage() {
  const supabase = await createServerSupabaseClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/login');
  }

  const { data: bookings } = await supabase
    .from('bookings')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="min-h-screen bg-black pt-24 px-4 pb-16">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-white">Dashboard</h1>
            <p className="text-white/40 text-sm mt-1">{user.email}</p>
          </div>
          <form action="/api/auth/logout" method="POST">
            <button
              type="submit"
              className="text-sm text-white/40 hover:text-white border border-white/10 hover:border-white/30 px-4 py-2 rounded-lg transition-all"
            >
              Log Out
            </button>
          </form>
        </div>

        {/* Book a service CTA */}
        <div className="bg-green-500/10 border border-green-500/20 rounded-2xl p-6 mb-10 flex items-center justify-between">
          <div>
            <h2 className="text-white font-semibold text-lg">Book a Service</h2>
            <p className="text-white/50 text-sm mt-1">
              Schedule fumigation, pest control or cleaning.
            </p>
          </div>
          <BookNowButton />
        </div>

        {/* Bookings list */}
        <h2 className="text-white font-semibold text-xl mb-4">Your Bookings</h2>

        {!bookings || bookings.length === 0 ? (
          <div className="bg-white/5 border border-white/10 rounded-2xl p-10 text-center">
            <p className="text-white/40 text-sm">You have no bookings yet.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 flex items-start justify-between gap-4"
              >
                <div className="flex flex-col gap-1">
                  <h3 className="text-white font-medium">{booking.service}</h3>
                  <p className="text-white/40 text-sm">📅 {booking.date}</p>
                  <p className="text-white/40 text-sm">📍 {booking.location}</p>
                  <p className="text-white/40 text-sm">📞 {booking.phone}</p>
                </div>

                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full border flex-shrink-0 ${
                    booking.status === 'confirmed'
                      ? 'bg-green-500/10 text-green-400 border-green-500/20'
                      : booking.status === 'completed'
                      ? 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                      : booking.status === 'cancelled'
                      ? 'bg-red-500/10 text-red-400 border-red-500/20'
                      : 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20'
                  }`}
                >
                  {booking.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}