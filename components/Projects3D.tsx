'use client';

import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as THREE from 'three';

const projects = [
    {
        title: "Harry Potter",
        category: "DISCOVER YOUR PATRONUS",
        description: "An immersive digital experience where users discover their Patronus through interactive storytelling and magical animations.",
        image: "https://images.unsplash.com/photo-1618944847828-82e943c3bdb7?w=1200&h=800&fit=crop",
        tech: ["Three.js", "WebGL", "React", "GSAP"],
        link: "https://example.com/project1",
        github: "https://github.com/yourname/project1"
    },
    {
        title: "Piromecanica",
        category: "THE BEST",
        description: "A cutting-edge industrial visualization platform showcasing advanced manufacturing processes with real-time 3D rendering.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=800&fit=crop",
        tech: ["Next.js", "Three.js", "TypeScript", "Framer Motion"],
        link: "https://example.com/project2",
        github: "https://github.com/yourname/project2"
    },
    {
        title: "Chile 20",
        category: "ADIDAS",
        description: "Interactive product launch campaign featuring dynamic animations and immersive 3D product showcases for Adidas footwear.",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&h=800&fit=crop",
        tech: ["WebGL", "GLSL Shaders", "Vue.js", "GSAP"],
        link: "https://example.com/project3",
        github: "https://github.com/yourname/project3"
    },
    {
        title: "Neon Horizon",
        category: "WebGL Experience",
        description: "A futuristic 3D racing game built with Three.js featuring neon aesthetics, real-time physics, and immersive gameplay.",
        image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=1200&h=800&fit=crop",
        tech: ["Three.js", "React Three Fiber", "Cannon.js", "React"],
        link: "https://example.com/project4",
        github: "https://github.com/yourname/project4"
    },
    {
        title: "Cosmic",
        category: "Space Game",
        description: "An epic space exploration game with procedurally generated galaxies, stunning visual effects, and engaging gameplay mechanics.",
        image: "https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=1200&h=800&fit=crop",
        tech: ["Unity", "C#", "Blender", "Shader Graph"],
        link: "https://example.com/project5",
        github: "https://github.com/yourname/project5"
    },
    {
        title: "Quantum",
        category: "Digital Art",
        description: "Generative art platform creating unique visual experiences using AI and creative coding techniques with real-time rendering.",
        image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200&h=800&fit=crop",
        tech: ["p5.js", "TensorFlow.js", "WebGL", "Node.js"],
        link: "https://example.com/project6",
        github: "https://github.com/yourname/project6"
    },
];

export default function Projects3D() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentProject, setCurrentProject] = useState(0);
    const [scrollOpacity, setScrollOpacity] = useState(1);
    const scrollProgressRef = useRef(0);

    useEffect(() => {
        if (!canvasRef.current || !containerRef.current) return;

        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x000000);

        // Camera
        const camera = new THREE.PerspectiveCamera(
            50,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );
        camera.position.z = 8;

        // Renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvasRef.current,
            antialias: true,
        });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(0, 0, 10);
        scene.add(pointLight);

        // Create card group
        const cardGroup = new THREE.Group();
        scene.add(cardGroup);

        // Create cards
        const cards: THREE.Mesh[] = [];
        const textureLoader = new THREE.TextureLoader();

        projects.forEach((project, idx) => {
            const texture = textureLoader.load(project.image);
            texture.minFilter = THREE.LinearFilter;

            const geometry = new THREE.PlaneGeometry(4, 5);
            const material = new THREE.MeshStandardMaterial({
                map: texture,
                side: THREE.DoubleSide,
            });

            const mesh = new THREE.Mesh(geometry, material);
            mesh.position.y = -idx * 6;
            mesh.position.z = -idx * 0.5;

            (mesh as any).userData = { project, index: idx };

            cardGroup.add(mesh);
            cards.push(mesh);
        });

        // Scroll handling
        const handleScroll = () => {
            if (!containerRef.current) return;

            const rect = containerRef.current.getBoundingClientRect();
            const containerTop = rect.top;
            const windowHeight = window.innerHeight;
            
            const scrolled = -containerTop;
            const maxScroll = rect.height - windowHeight;
            
            const progress = Math.max(0, Math.min(1, scrolled / maxScroll));
            
            scrollProgressRef.current = progress;

            const fadeStart = windowHeight * 0.3;
            setScrollOpacity(Math.max(0, 1 - (scrolled / fadeStart)));

            const newIndex = Math.round(progress * (projects.length - 1));
            setCurrentProject(newIndex);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        // Mouse interaction
        const raycaster = new THREE.Raycaster();
        const mouse = new THREE.Vector2();
        let hoveredCard: THREE.Mesh | null = null;

        const handleMouseMove = (event: MouseEvent) => {
            mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

            raycaster.setFromCamera(mouse, camera);
            const intersects = raycaster.intersectObjects(cards);

            if (hoveredCard && hoveredCard !== intersects[0]?.object) {
                hoveredCard = null;
                document.body.style.cursor = 'auto';
            }

            if (intersects.length > 0) {
                const card = intersects[0].object as THREE.Mesh;
                const idx = (card as any).userData.index;
                
                if (idx === currentProject) {
                    hoveredCard = card;
                    document.body.style.cursor = 'pointer';
                }
            }
        };

        const handleClick = () => {
            if (hoveredCard) {
                const userData = (hoveredCard as any).userData;
                window.open(userData.project.link, '_blank');
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('click', handleClick);

        // Resize
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // Animation loop
        let animationFrameId: number;
        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);

            const progress = scrollProgressRef.current;

            cardGroup.position.y = progress * (projects.length - 1) * 6;

            cards.forEach((card, idx) => {
                const cardScroll = progress * (projects.length - 1);
                const distance = Math.abs(idx - cardScroll);

                const scale = 1 - Math.min(distance * 0.3, 0.7);
                card.scale.set(scale, scale, 1);

                const material = card.material as THREE.MeshStandardMaterial;
                material.opacity = 1 - Math.min(distance * 0.4, 0.8);
                material.transparent = true;

                card.rotation.y = (idx - cardScroll) * 0.15;
                card.rotation.x = (idx - cardScroll) * 0.05;

                card.position.z = -idx * 0.5 + (1 - distance) * 2;
            });

            renderer.render(scene, camera);
        };

        animate();

        // Cleanup
        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('click', handleClick);
            window.removeEventListener('resize', handleResize);
            
            cards.forEach(card => {
                card.geometry.dispose();
                (card.material as THREE.Material).dispose();
            });
            renderer.dispose();
        };
    }, []);

    return (
        <section
            ref={containerRef}
            className="relative bg-black"
            style={{ height: `${projects.length * 100}vh` }}
        >
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
                {/* Header */}
                <motion.div
                    className="absolute top-8 md:top-16 left-0 right-0 z-10 text-center pointer-events-none px-4"
                    style={{ opacity: scrollOpacity }}
                >
                    <h2 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-2 md:mb-4">
                        Selected Work
                    </h2>
                    <p className="text-sm md:text-xl text-white/60">
                        Scroll through projects
                    </p>
                </motion.div>

                {/* Canvas */}
                <canvas ref={canvasRef} className="w-full h-full" />

                {/* Mobile - Bottom Card */}
                <div className="md:hidden absolute bottom-0 left-0 right-0 z-20 pointer-events-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`mobile-${currentProject}`}
                            initial={{ opacity: 0, y: 100 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 100 }}
                            transition={{ duration: 0.5 }}
                            className="bg-black/80 backdrop-blur-xl border-t border-white/10 p-6"
                        >
                            <div className="text-blue-400 text-xs font-medium tracking-widest uppercase mb-2">
                                {projects[currentProject].category}
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-3">
                                {projects[currentProject].title}
                            </h3>

                            <p className="text-white/70 text-sm leading-relaxed mb-4">
                                {projects[currentProject].description}
                            </p>

                            <div className="mb-4">
                                <div className="text-white/50 text-xs uppercase tracking-wider mb-2">
                                    Tech Stack
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {projects[currentProject].tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 bg-white/10 text-white/90 text-xs rounded-md border border-white/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <a
                                    href={projects[currentProject].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 px-4 py-2.5 bg-white text-black font-semibold rounded-lg text-sm text-center active:scale-95 transition-transform"
                                >
                                    View Live →
                                </a>
                                <a
                                    href={projects[currentProject].github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2.5 border border-white/30 text-white font-semibold rounded-lg text-sm active:scale-95 transition-transform"
                                >
                                    GitHub ↗
                                </a>
                            </div>

                            <div className="text-center text-white/40 text-sm font-bold mt-4">
                                {String(currentProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Desktop - Left Side */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`left-${currentProject}`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="hidden md:block absolute left-6 lg:left-10 top-1/2 -translate-y-1/2 w-64 lg:w-80 z-20 pointer-events-auto"
                    >
                        <div className="space-y-6">
                            <div className="text-blue-400 text-sm font-medium tracking-widest uppercase">
                                {projects[currentProject].category}
                            </div>

                            <div>
                                <div className="text-white/50 text-xs uppercase tracking-wider mb-3">
                                    Tech Stack
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {projects[currentProject].tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="px-3 py-1.5 bg-white/10 text-white/90 text-sm rounded-lg border border-white/20 backdrop-blur-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <a
                                    href={projects[currentProject].link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-white/90 transition-all text-center hover:scale-105"
                                >
                                    View Live →
                                </a>
                                <a
                                    href={projects[currentProject].github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full px-6 py-3 border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-center hover:scale-105"
                                >
                                    GitHub ↗
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Desktop - Right Side */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`right-${currentProject}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.5 }}
                        className="hidden md:block absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 w-80 lg:w-96 z-20 pointer-events-none"
                    >
                        <div className="space-y-4">
                            <h3 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
                                {projects[currentProject].title}
                            </h3>

                            <p className="text-white/70 text-base lg:text-lg leading-relaxed">
                                {projects[currentProject].description}
                            </p>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Desktop Counter */}
                <div className="hidden md:block absolute bottom-10 right-10 text-white/60 text-2xl font-bold pointer-events-none z-10">
                    {String(currentProject + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
                </div>

                {/* Scroll Indicator */}
                <motion.div
                    className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 text-sm flex-col items-center gap-2 pointer-events-none z-10"
                    style={{ opacity: scrollOpacity }}
                >
                    <span>SCROLL</span>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    >
                        ↓
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}