'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="relative z-20 bg-[#121212] py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
                {/* Left: About */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
                        About Me
                    </h2>
                    <p className="text-xl text-white/70 leading-relaxed mb-6">
                        I'm a creative developer specializing in building immersive
                        digital experiences that blend cutting-edge technology with
                        stunning visual design.
                    </p>
                    <p className="text-xl text-white/70 leading-relaxed">
                        My work focuses on WebGL, React, Three.js, and modern web
                        technologies to create unforgettable user experiences.
                    </p>
                </motion.div>

                {/* Right: Skills */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h3 className="text-3xl font-bold text-white mb-8">Skills & Expertise</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {['React', 'Next.js', 'Three.js', 'WebGL', 'TypeScript', 'Framer Motion', 'GSAP', 'Tailwind CSS'].map((skill, i) => (
                            <motion.div
                                key={skill}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                whileHover={{
                                    scale: 1.05,
                                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                                    transition: { duration: 0.2, delay: 0 }
                                }}
                                className="p-4 border border-white/10 rounded-lg text-white/80 hover:text-white transition-colors cursor-pointer"
                            >
                                {skill}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}