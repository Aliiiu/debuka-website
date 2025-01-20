'use client';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isSpotActive, setIsSpotActive] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    gsap.to('#logo', {
      scrollTrigger: {
        trigger: '#about',
        start: 'top bottom',
        end: '+=350',
        scrub: true,
      },
      opacity: 0,
    });

    const handleInteraction = (x: number, y: number) => {
      setCursorPos({ x, y });
      setIsSpotActive(true);
      setHasInteracted(true);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      
      timeoutRef.current = setTimeout(() => {
        setIsSpotActive(false);
      }, 5000);
    };

    // Mouse event handler
    const handleMouseMove = (e: MouseEvent) => {
      handleInteraction(e.clientX, e.clientY);
    };

    // Touch event handler
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        e.preventDefault();
        const touch = e.touches[0];
        handleInteraction(touch.clientX, touch.clientY);
      }
    };

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        handleInteraction(touch.clientX, touch.clientY);
      }
    };

    // Add all event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchstart', handleTouchStart);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      <div
        className={`absolute inset-0 z-0 transition-opacity duration-500 ${hasInteracted ? 'opacity-100' : 'opacity-0'}`}
        style={{
          backgroundImage: "url('/images/starryBackground.jpeg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
     
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
      <div className='mock md:hidden lg:block absolute -bottom-10 md:-bottom-40 xl:-bottom-40 w-full bg-masked-full-base md:bg-masked-full bg-no-repeat bg-center bg-contain h-[190px] md:h-[400px] xl:h-[680px]' />
    </section>
  );
};

export default Hero;
