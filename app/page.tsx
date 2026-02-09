'use client';

import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects3D from '@/components/Projects3D';

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white">
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      
      <About />
      <Experience />
      <Projects3D />

      <footer className="py-12 text-center text-white/40 text-sm bg-[#0a0a0a]">
        <p>&copy; {new Date().getFullYear()} Kranthi. All rights reserved.</p>
      </footer>
    </main>
  );
}