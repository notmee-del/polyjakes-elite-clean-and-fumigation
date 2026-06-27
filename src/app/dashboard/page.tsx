import { redirect } from 'next/navigation';
import Link from 'next/link';
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

  // Calculate statistics
  const totalBookings = bookings?.length || 0;
  const activeBookings = bookings?.filter(
    (b) => b.status === 'confirmed' || b.status === 'pending'
  ).length || 0;
  const completedBookings = bookings?.filter(
    (b) => b.status === 'completed'
  ).length || 0;

  // Initials for avatar placeholder
  const nameInitial = user.name ? user.name[0].toUpperCase() : 'C';

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 pt-24 px-4 pb-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Sidebar Profile Panel */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 shadow-sm">
              
              {/* Profile Card Header */}
              <div className="flex items-center gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800/60">
                {user.picture ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={user.picture}
                    alt={user.name || 'User'}
                    className="w-16 h-16 rounded-2xl object-cover border border-zinc-200 dark:border-zinc-700"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 text-green-600 dark:text-green-400 font-extrabold text-2xl flex items-center justify-center border border-green-500/20 select-none">
                    {nameInitial}
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h3 className="text-zinc-900 dark:text-white font-bold text-lg truncate">
                    {user.name || 'Client'}
                  </h3>
                  <p className="text-zinc-500 dark:text-zinc-400 text-xs truncate">
                    {user.email}
                  </p>
                  <span className="inline-flex items-center gap-1.5 bg-green-500/10 text-green-700 dark:text-green-400 text-[10px] font-extrabold uppercase px-2.5 py-0.5 rounded-full border border-green-500/20 mt-2 select-none">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 dark:bg-green-400" />
                    Verified Client
                  </span>
                </div>
              </div>

              {/* Sidebar Navigation */}
              <div className="pt-6 space-y-2">
                <Link
                  href="/"
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 hover:text-green-600 dark:hover:text-green-400 rounded-xl transition-all"
                >
                  <span>🏠</span> Home Page
                </Link>
                <Link
                  href="/dashboard/book"
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 hover:text-green-600 dark:hover:text-green-400 rounded-xl transition-all"
                >
                  <span>📅</span> Book New Service
                </Link>
                <Link
                  href="/#faq"
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/60 hover:text-green-600 dark:hover:text-green-400 rounded-xl transition-all"
                >
                  <span>💬</span> Get Support (FAQ)
                </Link>
                <a
                  href="/auth/logout"
                  className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-red-600 dark:text-red-400 hover:bg-red-500/5 dark:hover:bg-red-500/10 rounded-xl transition-all"
                >
                  <span>🚪</span> Log Out
                </a>
              </div>
            </div>

            {/* Quick Status / Operations Panel */}
            <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 shadow-sm space-y-4">
              <h4 className="text-zinc-900 dark:text-white font-bold text-sm uppercase tracking-wider">
                Operational Status
              </h4>
              <div className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span>Nairobi Dispatch: <strong>Fully Active</strong></span>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                Our technicians are currently dispatched on schedules. Same-day emergency pest fumigations are active.
              </p>
            </div>
          </div>

          {/* Right Column: Main Stats & Booking Console */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Row of Stats Widgets */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Widget 1: Total */}
              <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-32 hover:border-zinc-300 dark:hover:border-zinc-800 transition-colors">
                <span className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider">
                  Total Bookings
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-zinc-900 dark:text-white">
                    {totalBookings}
                  </span>
                  <span className="text-zinc-400 text-xs font-semibold">orders</span>
                </div>
              </div>

              {/* Widget 2: Active */}
              <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-32 hover:border-zinc-300 dark:hover:border-zinc-800 transition-colors">
                <span className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider">
                  Active Services
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-green-600 dark:text-green-400">
                    {activeBookings}
                  </span>
                  <span className="text-green-500/80 text-xs font-semibold">scheduled</span>
                </div>
              </div>

              {/* Widget 3: Completed */}
              <div className="bg-white dark:bg-zinc-900/40 border border-zinc-200 dark:border-zinc-800/50 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-32 hover:border-zinc-300 dark:hover:border-zinc-800 transition-colors">
                <span className="text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider">
                  Completed Jobs
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-blue-600 dark:text-blue-400">
                    {completedBookings}
                  </span>
                  <span className="text-blue-500/80 text-xs font-semibold">exterminated</span>
                </div>
              </div>

            </div>

            {/* Restructured Booking CTA Card */}
            <div className="relative overflow-hidden bg-green-500/5 dark:bg-green-500/10 border border-green-500/20 dark:border-green-500/30 rounded-2xl p-8 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="absolute inset-0 oversight-grid opacity-20 pointer-events-none" />
              <div className="relative z-10 space-y-2 max-w-lg">
                <h3 className="text-zinc-900 dark:text-white font-extrabold text-xl">Need a professional treatment?</h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                  Book a certified fumigation, cockroach treatment, deep clean, or rodent control. Secure a time slot with our Nairobi specialists in under 2 minutes.
                </p>
              </div>
              <div className="relative z-10 flex-shrink-0">
                <BookNowButton />
              </div>
            </div>

            {/* Restructured Bookings Record List */}
            <div className="bg-white dark:bg-zinc-900/30 border border-zinc-200 dark:border-zinc-800/40 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-100 dark:border-zinc-800/50">
                <h3 className="text-zinc-900 dark:text-white font-extrabold text-lg">Bookings History</h3>
                <span className="text-zinc-500 dark:text-zinc-400 text-xs font-semibold">Showing all orders</span>
              </div>

              {!bookings || bookings.length === 0 ? (
                <div className="text-center py-16 space-y-4">
                  <div className="text-5xl select-none">🧹</div>
                  <h4 className="text-zinc-850 dark:text-white font-bold text-lg">No services booked yet</h4>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm max-w-sm mx-auto">
                    Your scheduled operations and deep clean contracts will appear here once booked.
                  </p>
                  <div className="pt-2">
                    <Link
                      href="/dashboard/book"
                      className="bg-green-500 hover:bg-green-400 text-black text-xs font-bold px-5 py-2.5 rounded-xl transition-all inline-block shadow-md"
                    >
                      Book Your First Service
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-zinc-100 dark:border-zinc-850 text-zinc-500 dark:text-zinc-400 text-xs font-bold uppercase tracking-wider">
                        <th className="pb-4 font-semibold">Service</th>
                        <th className="pb-4 font-semibold">Schedule Date</th>
                        <th className="pb-4 font-semibold">Location & Contact</th>
                        <th className="pb-4 font-semibold text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-100 dark:divide-zinc-850">
                      {bookings.map((booking) => (
                        <tr key={booking.id} className="text-sm group hover:bg-zinc-50/50 dark:hover:bg-zinc-900/10 transition-colors">
                          
                          {/* Service Column */}
                          <td className="py-4 pr-4">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl select-none">🏠</span>
                              <div>
                                <span className="font-bold text-zinc-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                                  {booking.service}
                                </span>
                                <span className="block text-[10px] text-zinc-400 dark:text-zinc-500 font-semibold uppercase tracking-wider mt-0.5">
                                  Ref: #{booking.id.substring(0, 8)}
                                </span>
                              </div>
                            </div>
                          </td>

                          {/* Date Column */}
                          <td className="py-4 pr-4 text-zinc-650 dark:text-zinc-350 font-medium">
                            {booking.date}
                          </td>

                          {/* Details Column */}
                          <td className="py-4 pr-4">
                            <div className="text-zinc-650 dark:text-zinc-350 text-xs space-y-0.5">
                              <p className="font-semibold truncate max-w-xs">📍 {booking.location}</p>
                              <p className="text-zinc-400 dark:text-zinc-500">📞 {booking.phone}</p>
                            </div>
                          </td>

                          {/* Status Badge Column */}
                          <td className="py-4 text-right">
                            <span
                              className={`inline-flex items-center gap-1.5 text-[10px] font-extrabold px-3 py-1 rounded-full border uppercase tracking-wider ${
                                booking.status === 'confirmed'
                                  ? 'bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20'
                                  : booking.status === 'completed'
                                  ? 'bg-blue-500/10 text-blue-700 dark:text-blue-400 border-blue-500/20'
                                  : booking.status === 'cancelled'
                                  ? 'bg-red-500/10 text-red-700 dark:text-red-400 border-red-500/20'
                                  : 'bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20'
                              }`}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full ${
                                booking.status === 'confirmed' ? 'bg-green-500' :
                                booking.status === 'completed' ? 'bg-blue-500' :
                                booking.status === 'cancelled' ? 'bg-red-500' : 'bg-yellow-500'
                              }`} />
                              {booking.status}
                            </span>
                          </td>

                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}