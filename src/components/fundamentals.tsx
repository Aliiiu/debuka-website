'use client';

import { fundamentals } from '@/assets/constants/fundamentals';
import Quote from '@/assets/icons/quote';
import { EmblaCarouselType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { cn } from '@/lib/utils';

const Fundamentals = () => {
	const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

	const scrollTo = useCallback(
		(index: number) => emblaApi && emblaApi.scrollTo(index),
		[emblaApi]
	);

	const onInit = useCallback((emblaApi: EmblaCarouselType) => {
		setScrollSnaps(emblaApi.scrollSnapList());
	}, []);

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onInit(emblaApi);
		onSelect(emblaApi);
		emblaApi.on('reInit', onInit);
		emblaApi.on('reInit', onSelect);
		emblaApi.on('select', onSelect);
	}, [emblaApi, onInit, onSelect]);

	return (
		<section
			id='values'
			className='mx-auto max-w-[1440px] text-center bg-[#F1F1F1] bg-masked-base md:bg-masked bg-no-repeat bg-contain bg-bottom w-full pt-[100px] md:pt-[93px] pb-[180px] md:pb-[289px]'
		>
			<h2 className='text-primary-dark font-semibold text-4xl font-dms-serif'>
				Fundamental Promise
			</h2>
			<p className='text-body-alt mt-3'>
				Our fundamentals define our promises to our partners regarding our
				cuisines.
			</p>
			<div className='mt-10'>
				<div className='w-fit overflow-hidden mx-auto flex touch-manipulation gap-[6px] justify-center flex-wrap md:gap-3 items-center'>
					{scrollSnaps.map((_, index) => (
						<button
							key={index}
							onClick={() => scrollTo(index)}
							className={cn(
								'border border-grey-300 py-1 md:py-2 px-2 md:px-3 font-semibold rounded-full text-grey-800 text-xs',
								index === selectedIndex ? 'bg-primary-dark text-white' : ''
							)}
						>
							{fundamentals[index].title}
						</button>
					))}
				</div>
				<div className='p-6'>
					<div className='overflow-hidden max-w-[520px] mx-auto' ref={emblaRef}>
						<div className='flex touch-pan-y pt-5'>
							{fundamentals.map((item) => (
								<div
									key={item.id}
									className='min-w-0 pl-4 relative flex flex-col items-center gap-5 flex-[0_0_100%]'
								>
									<Quote />
									<span className='font-semibold text-grey-800 text-xl md:text-lg'>
										{item.content}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Fundamentals;
