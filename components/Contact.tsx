'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
        alert('Message sent! (This is a demo - connect your backend)');
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="relative bg-gradient-to-b from-black to-[#0a0a0a] py-32 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Left - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Get In Touch
                        </h2>
                        <p className="text-xl text-white/70 mb-8 leading-relaxed">
                            Have a project in mind? Let's work together to create something amazing.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-white/50 text-sm uppercase tracking-wider mb-2">
                                    Email
                                </h3>
                                <a 
                                    href="mailto:your.email@example.com"
                                    className="text-2xl text-white hover:text-blue-400 transition-colors"
                                >
                                    your.email@example.com
                                </a>
                            </div>

                            <div>
                                <h3 className="text-white/50 text-sm uppercase tracking-wider mb-2">
                                    Location
                                </h3>
                                <p className="text-2xl text-white">
                                    Your City, Country
                                </p>
                            </div>

                            <div>
                                <h3 className="text-white/50 text-sm uppercase tracking-wider mb-2">
                                    Availability
                                </h3>
                                <p className="text-2xl text-white">
                                    Open for opportunities
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right - Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-white/70 mb-2 text-sm">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-white/70 mb-2 text-sm">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-white/70 mb-2 text-sm">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={6}
                                    className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-lg text-white placeholder-white/30 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full px-8 py-4 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-colors text-lg"
                            >
                                Send Message →
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}