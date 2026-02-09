'use client';

import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa';

const socialLinks = [
    {
        name: 'GitHub',
        icon: FaGithub,
        url: 'https://github.com/kranthii-k',
        color: '#ffffff'
    },
    {
        name: 'LinkedIn',
        icon: FaLinkedin,
        url: 'https://linkedin.com/in/yourprofile',
        color: '#0A66C2'
    },
    {
        name: 'LeetCode',
        icon: FaCode,
        url: 'https://leetcode.com/yourprofile',
        color: '#FFA116'
    }
];

export default function SocialLinks() {
    return (
        <section className="relative bg-black py-32 px-6">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Let's Connect
                    </h2>
                    <p className="text-xl text-white/60 mb-12">
                        Follow me on social platforms
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.name}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:border-white/30 transition-all"
                        >
                            {/* Glow effect on hover */}
                            <div 
                                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity"
                                style={{ 
                                    background: `radial-gradient(circle at center, ${social.color}20, transparent 70%)`
                                }}
                            />

                            <div className="relative">
                                <social.icon 
                                    className="w-16 h-16 mx-auto mb-4 transition-colors"
                                    style={{ color: social.color }}
                                />
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    {social.name}
                                </h3>
                                <p className="text-white/60 text-sm group-hover:text-white/80 transition-colors">
                                    Follow me →
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}