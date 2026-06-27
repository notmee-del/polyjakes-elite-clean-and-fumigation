import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/layout/navbar';
import Footer from './components/layout/Footer';
import { Auth0Provider } from '@auth0/nextjs-auth0/client';
import { auth0 } from '@/lib/auth0';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'PolyJakes Elite Clean & Fumigation',
  description: 'Professional fumigation, pest control, and cleaning services.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth0.getSession();

  return (
    <html lang="en" className="dark" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7527158994418895"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  } else {
                    document.documentElement.classList.remove('dark');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.className} bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-50 antialiased min-h-screen flex flex-col`}>
        <Auth0Provider user={session?.user}>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Auth0Provider>
      </body>
    </html>
  );
}