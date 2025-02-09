'use client';

import Image from 'next/image';
import gsap from 'gsap';
import React from 'react';
import { useEffect } from 'react';
import Scroll from '@/components/scrollButton';
import HomeButton from '@/components/homeButton';
import StarterMenu from './starter-menu';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const Hero: React.FC = React.memo(() => {
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
					<div >
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
					<span className='text-primary font-extralight mt-2 md:mt-6 text-sm md:text-xl leading-[26px] font-swis pl-[0.5em] tracking-[0.5em]'>
						BEYOND FOOD
					</span>
				</div>
		</div>
			
					  <div className="items-center ">
                       <Scroll />
                <HomeButton />
    </div>
                
			
		
    		
    
			<div className='mock md:hidden lg:block absolute -bottom-10 md:-bottom-40 xl:-bottom-40 w-full bg-masked-full-base md:bg-masked-full bg-no-repeat bg-center bg-contain h-[190px] md:h-[400px] xl:h-[680px]' />
			
                 
		
		</section>
   
	);
});

export default Hero;
