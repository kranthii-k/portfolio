'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import Projects from '@/components/Projects';

export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    }
  }, []);

  return (
    <main className="bg-[#121212] min-h-screen text-white">
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      <Projects />

      <footer className="py-12 text-center text-white/40 text-sm">
        <p>&copy; {new Date().getFullYear()} Kranthi. All rights reserved.</p>
      </footer>
    </main>
  );
}
