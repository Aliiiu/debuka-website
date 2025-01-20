'use client';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isSpotActive, setIsSpotActive] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null); // Allow null

  useEffect(() => {
    // GSAP animation for fading out the logo on scroll
    gsap.to('#logo', {
      scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        end: '+=350',
        scrub: true,
      },
      opacity: 0,
    });

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      activateSpotlight();
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        setCursorPos({ x: touch.clientX, y: touch.clientY });
        activateSpotlight();
      }
    };

    const activateSpotlight = () => {
      setIsSpotActive(true);

      // Clear the existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Start a new timeout
      timeoutRef.current = setTimeout(() => {
        setIsSpotActive(false);
      }, 5000);
    };

    // Add event listeners for both mouse and touch events
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);

      // Cleanup the timeout on unmount
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      {/* Background Image */}
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-500 ${hasInteracted ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: "url('/images/starryBackground.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Spotlight Effect */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `radial-gradient(
            circle 1500px at ${cursorPos.x}px ${cursorPos.y}px,
            transparent 0%,
            rgba(0, 0, 0, ${isSpotActive ? '1.0' : '1.0'}) 25%
          )`,
          transition: 'all 1s cubic-bezier(0.4, 0, 0.2, 1)',
          backdropFilter: 'brightness(1.5)',
        }}
      />

      {/* Hero Content */}
      <div
        id="hero"
        className="relative z-20 container h-screen flex items-center justify-center"
      >
        <div className="flex flex-col items-center">
          <div className="overflow-hidden">
            <div id="logo" className="w-[200px] md:w-[321px] h-fit">
              <Image
                src={'/svgs/debuka.svg'}
                alt="debuka logo"
                width={321}
                height={136}
                className="object-contain h-auto max-w-full"
              />
            </div>
          </div>
          <span className="text-primary font-extralight mt-2 md:mt-6 text-sm md:text-xl leading-[26px] pl-[0.5em] tracking-[0.5em]">
            BEYOND FOOD
          </span>
        </div>
      </div>

      {/* Decorative Mask */}
      <div className="mock md:hidden lg:block absolute -bottom-10 md:-bottom-40 xl:-bottom-40 w-full bg-masked-full-base md:bg-masked-full bg-no-repeat bg-center bg-contain h-[190px] md:h-[400px] xl:h-[680px]" />
    </section>
  );
};

export default Hero;
