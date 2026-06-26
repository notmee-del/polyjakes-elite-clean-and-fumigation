import { redirect } from 'next/navigation';
import { createAdminSupabaseClient } from '@/lib/supabase/server';
import { auth0 } from '@/lib/auth0';
import BookNowButton from '../components/ui/BookNowButton';

export default async function DashboardPage() {
  const session = await auth0.getSession();

  if (!session || !session.user) {
    redirect('/auth/login');
  }

  const user = session.user;
  const adminSupabase = createAdminSupabaseClient();

  const { data: bookings } = await adminSupabase
    .from('bookings')
    .select('*')
    .eq('user_id', user.sub)
    .order('created_at', { ascending: false });

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-24 px-4 pb-16 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-10 pb-6 border-b border-zinc-200 dark:border-zinc-800/50">
          <div>
            <h1 className="text-3xl font-extrabold text-zinc-900 dark:text-white">Dashboard</h1>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">{user.email}</p>
          </div>
          <a
            href="/auth/logout"
            className="text-sm font-semibold text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 px-4 py-2.5 rounded-xl transition-all"
          >
            Log Out
          </a>
        </div>

        {/* Book a service CTA */}
        <div className="bg-green-500/5 dark:bg-green-500/10 border border-green-500/20 dark:border-green-500/30 rounded-2xl p-6 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-zinc-900 dark:text-white font-bold text-lg">Book a Service</h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-1">
              Schedule professional fumigation, pest control, or deep cleaning.
            </p>
          </div>
          <BookNowButton />
        </div>

        {/* Bookings list */}
        <h2 className="text-zinc-900 dark:text-white font-bold text-xl mb-6">Your Bookings</h2>

        {!bookings || bookings.length === 0 ? (
          <div className="bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/40 rounded-2xl p-10 text-center shadow-sm">
            <p className="text-zinc-500 dark:text-zinc-400 text-sm">You have no bookings yet.</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {bookings.map((booking) => (
              <div
                key={booking.id}
                className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/40 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm"
              >
                <div className="flex flex-col gap-1.5">
                  <h3 className="text-zinc-900 dark:text-white font-bold text-lg">{booking.service}</h3>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 text-zinc-500 dark:text-zinc-400 text-sm">
                    <span>📅 {booking.date}</span>
                    <span>📍 {booking.location}</span>
                    <span>📞 {booking.phone}</span>
                  </div>
                </div>

                <span
                  className={`text-xs font-semibold px-3.5 py-1 rounded-full border flex-shrink-0 uppercase tracking-wider w-fit ${
                    booking.status === 'confirmed'
                      ? 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20'
                      : booking.status === 'completed'
                      ? 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20'
                      : booking.status === 'cancelled'
                      ? 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20'
                      : 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20'
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