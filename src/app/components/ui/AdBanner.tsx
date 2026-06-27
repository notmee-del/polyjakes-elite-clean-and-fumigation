'use client';

import { useEffect, useState } from 'react';

interface AdBannerProps {
  adSlot?: string;
  adFormat?: string;
  responsive?: boolean;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export default function AdBanner({
  adSlot,
  adFormat = 'auto',
  responsive = true,
}: AdBannerProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let active = true;
    setTimeout(() => {
      if (active) {
        setMounted(true);
      }
    }, 0);
    return () => {
      active = false;
    };
  }, []);

  useEffect(() => {
    if (mounted) {
      try {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.push({});
      } catch (err) {
        console.error('AdSense initialization error:', err);
      }
    }
  }, [mounted]);

  // Keep a clean skeleton placeholder during SSR to avoid layout shifts
  if (!mounted) {
    return (
      <div className="w-full flex flex-col items-center my-8 text-center px-4">
        <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-semibold mb-2 select-none">
          Advertisement
        </span>
        <div className="w-full max-w-[728px] h-[90px] bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 rounded-2xl animate-pulse flex items-center justify-center text-xs text-zinc-400">
          Loading Ad...
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center my-8 overflow-hidden px-4">
      <span className="text-[10px] uppercase tracking-wider text-zinc-400 dark:text-zinc-500 font-semibold mb-2 select-none">
        Advertisement
      </span>

      <div className="w-full max-w-[728px] flex justify-center bg-zinc-100/50 dark:bg-zinc-900/10 border border-zinc-250 dark:border-zinc-800/30 rounded-2xl p-3 min-h-[90px] shadow-sm">
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%' }}
          data-ad-client="ca-pub-7527158994418895"
          data-ad-slot={adSlot || 'default_slot'}
          data-ad-format={adFormat}
          data-full-width-responsive={responsive ? 'true' : 'false'}
        />
      </div>
    </div>
  );
}
