'use client';

import { motion } from 'framer-motion';

export default function Overlay() {
    return (
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            {/* Section 1: 0-20% scroll roughly */}
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute top-[10vh] w-full flex justify-center"
            >
                <div className="text-center">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-4">
                        KRANTHI
                    </h1>
                    <p className="text-xl md:text-2xl text-white/70 uppercase tracking-widest">
                        Creative Developer
                    </p>
                </div>
            </motion.div>

            {/* Section 2: ~30% scroll */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-[150vh] left-10 md:left-32 max-w-xl"
            >
                <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
                    I build <span className="text-blue-400">digital experiences</span> that defy expectations.
                </h2>
            </motion.div>

            {/* Section 3: ~60% scroll */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute top-[300vh] right-10 md:right-32 max-w-xl text-right"
            >
                <h2 className="text-4xl md:text-6xl font-semibold text-white leading-tight">
                    Bridging the gap between <span className="text-purple-400">design</span> and engineering.
                </h2>
            </motion.div>
        </div>
    );
}
