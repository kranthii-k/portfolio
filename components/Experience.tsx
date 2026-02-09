'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        year: '2024',
        role: 'Senior Frontend Developer',
        company: 'Tech Company',
        description: 'Led development of interactive web experiences using React and Three.js'
    },
    {
        year: '2023',
        role: 'Full Stack Developer',
        company: 'Startup Inc',
        description: 'Built scalable web applications with Next.js and Node.js'
    },
    {
        year: '2022',
        role: 'Junior Developer',
        company: 'Digital Agency',
        description: 'Created responsive websites and interactive components'
    },
];

export default function Experience() {
    return (
        <section className="relative z-20 bg-gradient-to-b from-[#121212] to-[#1a1a1a] py-32 px-6 md:px-12">
            <div className="max-w-5xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-bold text-white mb-20"
                >
                    Experience
                </motion.h2>

                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors"
                        >
                            <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />
                            
                            <div className="text-blue-400 text-sm mb-2">{exp.year}</div>
                            <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                            <div className="text-white/60 mb-3">{exp.company}</div>
                            <p className="text-white/70">{exp.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}