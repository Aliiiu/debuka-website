/* 'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
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
	}, []);
	return (
		<section className='relative w-full bg-black'>
			<div
				id='hero'
				className='container h-screen md:h-[calc(100vh-64px)] -mt-[70px] md:mt-0 flex items-center md:items-start justify-center pt-0 md:pb-[200px] md:pt-[180px]'
			>
				<div className='flex flex-col items-center'>
					<div className='overflow-hidden'>
						<div
							id='logo'
							className='w-[200px] md:w-[321px] h-fit md:h-[136px]'
						>
							<Image
								src={'/svgs/debuka.svg'}
								alt='debuka logo'
								width={321}
								height={136}
								className='object-contain h-auto max-w-full'
							/>
						</div>
					</div>
				
					<span className='text-primary font-extralight mt-2 md:mt-6 text-sm md:text-xl leading-[26px] pl-[0.5em] tracking-[0.5em]'>
						BEYOND FOOD
					</span>
				</div>
			</div>
			<div className='mock md:hidden lg:block absolute -bottom-10 md:-bottom-40 xl:-bottom-40 w-full bg-masked-full-base md:bg-masked-full bg-no-repeat bg-center bg-contain h-[190px] md:h-[400px] xl:h-[680px]' />
		</section>
	);
};

export default Hero; */



'use client';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isSpotActive, setIsSpotActive] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

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

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setCursorPos({ x: clientX, y: clientY });
      setIsSpotActive(true);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setIsSpotActive(false);
      }, 5000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      
      <div
      className = "absolute inset-0 z-0"
      style = {{
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
          backdropFilter: 'brightness(0.6)',
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







