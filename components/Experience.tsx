// 'use client';

// import { motion } from 'framer-motion';

// const experiences = [
//     {
//         year: '2025',
//         role: 'Full stack developer',
//         company: 'camply',
//         description: 'Led development of interactive web experiences using React and node js'
//     },
//     {
//         year: '2024',
//         role: 'Project Intern',
//         company: 'Infosys Springboard',
//         description: 'Built scalable web applications with Next.js and Node.js'
//     },
//     {
//         year: '2023',
//         role: 'Junior Developer',
//         company: 'Digital Agency',
//         description: 'Created responsive websites and interactive components'
//     },
// ];

// export default function Experience() {
//     return (
//         <section className="relative z-20 bg-gradient-to-b from-[#121212] to-[#1a1a1a] py-32 px-6 md:px-12">
//             <div className="max-w-5xl mx-auto">
//                 <motion.h2
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     className="text-5xl md:text-6xl font-bold text-white mb-20"
//                 >
//                     Experience
//                 </motion.h2>

//                 <div className="space-y-16">
//                     {experiences.map((exp, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 50 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ delay: index * 0.2 }}
//                             className="relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors"
//                         >
//                             <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />

//                             <div className="text-blue-400 text-sm mb-2">{exp.year}</div>
//                             <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
//                             <div className="text-white/60 mb-3">{exp.company}</div>
//                             <p className="text-white/70">{exp.description}</p>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }




// 'use client';

// import { motion } from 'framer-motion';

// const experiences = [
//     {
//         year: '2024',
//         role: 'Senior Frontend Developer',
//         company: 'Tech Company',
//         duration: 'Jan 2024 - Present',
//         description: 'Leading the development of cutting-edge web applications and mentoring junior developers.',
//         technologies: ['React', 'Next.js', 'Three.js', 'TypeScript', 'WebGL', 'Tailwind CSS'],
//     },
//     {
//         year: '2023',
//         role: 'Full Stack Developer',
//         company: 'Startup Inc',
//         duration: 'Mar 2023 - Dec 2023',
//         description: 'Built and maintained full-stack applications with focus on user experience and performance.',
//         technologies: ['Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS'],
//     },
//     {
//         year: '2022',
//         role: 'Junior Developer',
//         company: 'Digital Agency',
//         duration: 'Jun 2022 - Feb 2023',
//         description: 'Created responsive websites and interactive components for various client projects.',
//         technologies: ['React', 'JavaScript', 'HTML/CSS', 'GSAP', 'WordPress'],
//     },
// ];

// export default function Experience() {
//     return (
//         <section className="relative z-20 bg-gradient-to-b from-[#121212] to-[#1a1a1a] py-32 px-6 md:px-12">
//             <div className="max-w-5xl mx-auto">
//                 <motion.h2
//                     initial={{ opacity: 0, y: 20 }}
//                     whileInView={{ opacity: 1, y: 0 }}
//                     className="text-5xl md:text-6xl font-bold text-white mb-20"
//                 >
//                     Experience
//                 </motion.h2>

//                 <div className="space-y-16">
//                     {experiences.map((exp, index) => (
//                         <motion.div
//                             key={index}
//                             initial={{ opacity: 0, y: 50 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ delay: index * 0.2 }}
//                             className="relative pl-8 border-l-2 border-blue-500/30 hover:border-blue-500 transition-colors"
//                         >
//                             <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />

//                             <div className="text-blue-400 text-sm mb-2">{exp.year}</div>
//                             <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
//                             <div className="text-white/60 mb-3">{exp.company} • {exp.duration}</div>
//                             <p className="text-white/70 mb-4">{exp.description}</p>

//                             <div className="flex flex-wrap gap-2">
//                                 {exp.technologies.map((tech) => (
//                                     <span
//                                         key={tech}
//                                         className="px-3 py-1 text-xs bg-white/10 rounded-full text-white/80"
//                                     >
//                                         {tech}
//                                     </span>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// }


'use client';

import { motion } from 'framer-motion';

const experiences = [
    {
        year: '2024 <',
        role: 'Senior Frontend Developer',
        company: 'Tech Company',
        duration: 'Jan 2024 - Present',
        description: 'Leading the development of cutting-edge web applications and mentoring junior developers.',
        technologies: ['React', 'Next.js', 'Three.js', 'TypeScript', 'Tailwind CSS'],
    },
    {
        year: '> 2023',
        role: 'Full Stack Developer',
        company: 'Startup Inc',
        duration: 'Mar 2023 - Dec 2023',
        description: 'Built and maintained full-stack applications with focus on user experience and performance.',
        technologies: ['Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS'],
    },
    {
        year: '2022 <',
        role: 'Frontend Developer',
        company: 'Digital Agency',
        duration: 'Jun 2022 - Feb 2023',
        description: 'Created responsive websites and interactive components for various client projects.',
        technologies: ['React', 'JavaScript', 'HTML/CSS', 'GSAP', 'WordPress'],
    },
    {
        year: '> 2021',
        role: 'Junior Developer',
        company: 'Creative Studio',
        duration: 'Jan 2021 - May 2022',
        description: 'Assisted in building web applications and learned modern development practices.',
        technologies: ['JavaScript', 'React', 'CSS', 'Git', 'REST APIs'],
    },
];

export default function Experience() {
    return (
        <section className="relative z-20 bg-gradient-to-b from-[#121212] to-[#1a1a1a] py-32 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-bold text-white mb-20 text-center"
                >
                    Experience
                </motion.h2>

                {/* Timeline container */}
                <div className="relative">
                    {/* Center vertical line - desktop only */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/30 transform -translate-x-1/2" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => {
                            const isLeft = index % 2 === 0;

                            return (
                                <div key={index} className="relative">
                                    {/* Desktop: alternating sides */}
                                    <div className="hidden md:grid md:grid-cols-2 gap-8">
                                        {isLeft ? (
                                            <>
                                                {/* Content on LEFT */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: -50 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="pr-12"
                                                >
                                                    <div className="border border-white/10 rounded-xl p-6 bg-white/5 hover:border-blue-500/50 transition-colors text-right">
                                                        <div className="text-blue-400 text-sm mb-2">{exp.year}</div>
                                                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                                        <div className="text-white/60 mb-3">{exp.company} • {exp.duration}</div>
                                                        <p className="text-white/70 mb-4">{exp.description}</p>

                                                        <div className="flex flex-wrap gap-2 justify-end">
                                                            {exp.technologies.map((tech) => (
                                                                <span
                                                                    key={tech}
                                                                    className="px-3 py-1 text-xs bg-white/10 rounded-full text-white/80"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                                {/* Empty right side */}
                                                <div />
                                            </>
                                        ) : (
                                            <>
                                                {/* Empty left side */}
                                                <div />
                                                {/* Content on RIGHT */}
                                                <motion.div
                                                    initial={{ opacity: 0, x: 50 }}
                                                    whileInView={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: 0.2 }}
                                                    className="pl-12"
                                                >
                                                    <div className="border border-white/10 rounded-xl p-6 bg-white/5 hover:border-blue-500/50 transition-colors text-left">
                                                        <div className="text-blue-400 text-sm mb-2">{exp.year}</div>
                                                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                                        <div className="text-white/60 mb-3">{exp.company} • {exp.duration}</div>
                                                        <p className="text-white/70 mb-4">{exp.description}</p>

                                                        <div className="flex flex-wrap gap-2">
                                                            {exp.technologies.map((tech) => (
                                                                <span
                                                                    key={tech}
                                                                    className="px-3 py-1 text-xs bg-white/10 rounded-full text-white/80"
                                                                >
                                                                    {tech}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            </>
                                        )}
                                    </div>

                                    {/* Mobile: simple left side */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.2 }}
                                        className="md:hidden relative pl-8 border-l-2 border-blue-500/30"
                                    >
                                        <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />

                                        <div className="border border-white/10 rounded-xl p-6 bg-white/5">
                                            <div className="text-blue-400 text-sm mb-2">{exp.year}</div>
                                            <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                            <div className="text-white/60 mb-3">{exp.company} • {exp.duration}</div>
                                            <p className="text-white/70 mb-4">{exp.description}</p>

                                            <div className="flex flex-wrap gap-2">
                                                {exp.technologies.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="px-3 py-1 text-xs bg-white/10 rounded-full text-white/80"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>

                                    {/* Center dot - desktop only */}
                                    <div className="hidden md:block absolute left-1/2 top-8 transform -translate-x-1/2">
                                        <div className="w-4 h-4 bg-blue-500 rounded-full border-4 border-[#1a1a1a]" />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}