'use client';

import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import AnimatedCursor from './AnimatedCursor';

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
				className='container h-screen md:h-[calc(100vh-64px)] -mt-[60px] md:mt-0 flex items-center md:items-start justify-center pt-0 md:pb-[200px] md:pt-[180px]'
			>
				<div className='flex flex-col items-center'>
					<div className='overflow-hidden'>
						<div
							id='logo'
							className='w-[200px] md:w-[321px] h-[109px] md:h-[136px]'
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
			{/* <AnimatedCursor /> */}
			<div className='mock absolute -bottom-20 md:-bottom-40 xl:-bottom-40 w-full bg-masked-full-base md:bg-masked-full bg-no-repeat bg-center bg-contain h-[190px] md:h-[400px] xl:h-[680px]' />
		</section>
	);
};

export default Hero;
