'use client';

import { cn } from '@/lib/utils';
import { EmblaCarouselType } from 'embla-carousel';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import React, { ReactNode, useCallback, useEffect, useState } from 'react';

const AppCarousel = ({
	data,
	children,
	classNames,
}: {
	data?: any;
	children: ReactNode;
	classNames?: string;
}) => {
	const [emblaRef, emblaApi] = useEmblaCarousel(
		{ loop: true, align: 'center' },
		[Autoplay()]
	);
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
		<div className={cn('max-w-[500px] mx-auto', classNames)}>
			{data && (
				<div className='overflow-auto pb-2'>
					<div className='w-fit mx-auto flex touch-manipulation gap-[6px] justify-center md:gap-3 items-center'>
						{scrollSnaps.map((_, index) => (
							<button
								key={index}
								onClick={() => scrollTo(index)}
								className={cn(
									'border border-grey-300 py-1 md:py-2 px-2 md:px-3 font-semibold rounded-full text-grey-800 text-xs',
									index === selectedIndex ? 'bg-primary-dark text-white' : ''
								)}
							>
								{data[index].title}
							</button>
						))}
					</div>
				</div>
			)}
			<div className='overflow-hidden' ref={emblaRef}>
				{children}
			</div>
		</div>
	);
};

export default AppCarousel;
