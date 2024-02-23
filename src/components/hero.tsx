'use client';

import { useAnimation, motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
	const { ref, inView } = useInView();
	const animation = useAnimation();
	const [hasAnimated, setHasAnimated] = useState(false);

	useEffect(() => {
		if (inView && !hasAnimated) {
			setHasAnimated(true);
			animation.start({
				y: 0,
				transition: {
					type: 'tween',
					duration: 1.2,
				},
			});
		}
		if (!inView && !hasAnimated) {
			animation.start({
				y: '400px',
			});
		}
	}, [animation, inView, hasAnimated]);

	return (
		<section className='relative w-full bg-black'>
			<div className='container h-[calc(100vh-72px)] flex justify-center pt-[140px] md:pb-[200px] md:pt-[180px]'>
				<div className='flex flex-col items-center'>
					<div className='overflow-hidden'>
						<motion.div
							animate={animation}
							className='w-[250px] md:w-[321px] h-[109px] md:h-[136px]'
							ref={ref}
						>
							<Image
								src={'/svgs/debuka.svg'}
								alt='debuka logo'
								width={321}
								height={136}
								className='object-contain h-auto max-w-full'
							/>
						</motion.div>
					</div>

					<span className='text-primary font-extralight mt-2 md:mt-6 text-sm md:text-xl leading-[26px] pl-[0.5em] tracking-[0.5em]'>
						BEYOND FOOD
					</span>
				</div>
			</div>
			<div className='absolute bottom-0 md:-bottom-20 w-full bg-masked-full-base md:bg-masked-full bg-no-repeat bg-center bg-contain h-[190px] md:h-[400px] xl:h-[680px]' />
		</section>
	);
};

export default Hero;
