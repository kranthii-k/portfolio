'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
    {
        title: "Neon Horizon",
        category: "WebGL Experience",
        description: "An immersive 3D racing game built with Three.js and React Three Fiber.",
        tech: ["Three.js", "React", "WebGL"],
        link: "#"
    },
    {
        title: "Aether",
        category: "E-commerce Interface",
        description: "A futuristic shopping experience featuring fluid animations and micro-interactions.",
        tech: ["Next.js", "Framer Motion", "TypeScript"],
        link: "#"
    },
    {
        title: "Echo",
        category: "Audio Visualizer",
        description: "Real-time audio analysis tool using Web Audio API and Canvas.",
        tech: ["Web Audio API", "Canvas", "React"],
        link: "#"
    },
    {
        title: "Vortex",
        category: "Design System",
        description: "A comprehensive component library focused on accessibility and motion.",
        tech: ["React", "Tailwind", "Storybook"],
        link: "#"
    }
];

export default function Projects() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <section className="relative z-20 bg-[#0a0a0a] py-32 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mb-20"
                >
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                        Selected Work
                    </h2>
                    <p className="text-xl text-white/60">
                        A collection of my favorite projects
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.a
                            key={index}
                            href={project.link}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onHoverStart={() => setHoveredIndex(index)}
                            onHoverEnd={() => setHoveredIndex(null)}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            {/* Background Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20" />
                            
                            {/* Hover Effect */}
                            <motion.div
                                className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.4 }}
                            />

                            {/* Content */}
                            <div className="relative h-full p-8 flex flex-col justify-end">
                                <motion.div
                                    animate={{ y: hoveredIndex === index ? -10 : 0 }}
                                    transition={{ duration: 0.4 }}
                                >
                                    <div className="text-sm text-blue-300 mb-2 uppercase tracking-wider">
                                        {project.category}
                                    </div>
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/70 mb-4 line-clamp-2">
                                        {project.description}
                                    </p>
                                    
                                    {/* Tech Stack */}
                                    <div className="flex gap-2 flex-wrap">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 text-xs bg-white/10 rounded-full text-white/80"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Arrow indicator */}
                                <motion.div
                                    className="absolute top-8 right-8 text-white"
                                    animate={{
                                        x: hoveredIndex === index ? 5 : 0,
                                        y: hoveredIndex === index ? -5 : 0,
                                    }}
                                >
                                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M7 17L17 7M17 7H7M17 7v10" />
                                    </svg>
                                </motion.div>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}