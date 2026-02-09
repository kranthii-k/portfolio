'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        title: "Neon Horizon",
        category: "WebGL Experience",
        description: "An immersive 3D racing game built with Three.js and React Three Fiber."
    },
    {
        title: "Aether",
        category: "E-commerce Interface",
        description: "A futuristic shopping experience featuring fluid animations and micro-interactions."
    },
    {
        title: "Echo",
        category: "Audio Visualizer",
        description: "Real-time audio analysis tool using Web Audio API and Canvas."
    },
    {
        title: "Vortex",
        category: "Design System",
        description: "A comprehensive component library focused on accessibility and motion."
    }
];

export default function Projects() {
    return (
        <section className="relative z-20 bg-[#121212] py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-20 tracking-tight"
                >
                    Selected Work
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:bg-white/10 transition-colors duration-500"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="text-sm text-blue-300 mb-2 uppercase tracking-wider font-medium">
                                    {project.category}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-200 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-white/60 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
