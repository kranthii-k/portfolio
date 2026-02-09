'use client';

import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects3D from '@/components/Projects3D';
import SocialLinks from '@/components/SocialLinks';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white">
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      
      <About />
      <Experience />
      <Projects3D />
      <SocialLinks />
      <Contact />

      <footer className="py-12 text-center text-white/40 text-sm bg-[#0a0a0a] border-t border-white/5">
        <p>&copy; {new Date().getFullYear()} Kranthi. All rights reserved.</p>
        <p className="mt-2 text-xs">Built with Next.js, Three.js & Framer Motion</p>
      </footer>
    </main>
  );
}