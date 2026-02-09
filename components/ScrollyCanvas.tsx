'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';

export default function ScrollyCanvas({ children }: { children?: React.ReactNode }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Scroll progress from 0 to 1
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Total frames: 0 to 159 (based on file list)
    const frameCount = 160;

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const imgArray: HTMLImageElement[] = [];

        for (let i = 0; i < frameCount; i++) {
            const img = new Image();
            const paddedIndex = String(i + 1).padStart(4, '0'); // Changed padding to 4 digits starting from 1
            img.src = `/sequence/frame_${paddedIndex}.avif`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === frameCount) {
                    setIsLoaded(true);
                }
            };
            imgArray.push(img);
        }
        setImages(imgArray);
    }, []);

    // Render frame based on scroll
    useMotionValueEvent(scrollYProgress, 'change', (latest) => {
        if (!canvasRef.current || !isLoaded || images.length === 0) return;

        const ctx = canvasRef.current.getContext('2d');
        if (!ctx) return;

        const frameIndex = Math.min(
            Math.floor(latest * (frameCount - 1)),
            frameCount - 1
        );

        const img = images[frameIndex];
        if (!img) return;

        const canvas = canvasRef.current;

        // Cover logic
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    });

    // Handle Resize
    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Draw initial frame logic (once loaded)
    useEffect(() => {
        if (isLoaded && canvasRef.current && images.length > 0) {
            const ctx = canvasRef.current.getContext('2d');
            if (!ctx) return;

            const img = images[0];
            const canvas = canvasRef.current;
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;

            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
        }
    }, [isLoaded, images]);

    return (
        <div ref={containerRef} className="h-[500vh] relative">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="w-full h-full block object-cover" />

                {/* Loading Indicator */}
                {!isLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-[#121212] text-white z-50">
                        <div className="text-xl font-light tracking-widest animate-pulse">
                            LOADING ASSETS...
                        </div>
                    </div>
                )}
            </div>
            {children}
        </div>
    );
}
