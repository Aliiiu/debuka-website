"use client";

import ArrowLeft from "@/assets/icons/arrow-left";
import ArrowRight from "@/assets/icons/arrow-right";
import { cn } from "@/lib/utils";
import type { EmblaCarouselType } from "embla-carousel";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import React, { type ReactNode, useCallback, useEffect, useState } from "react";

const AppCarousel = ({
	data,
	children,
	classNames,
	showArrows,
	autoplay = true,
}: {
	data?: { title: string }[];
	children: ReactNode;
	classNames?: string;
	showArrows?: boolean;
	autoplay?: boolean;
}) => {
	const options = {
		loop: true,
		align: "center" as const,
		containScroll: "trimSnaps" as const,
	};
	const plugins = autoplay ? [Autoplay()] : [];
	const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins);
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
	const [canScrollPrev, setCanScrollPrev] = useState(false);
	const [canScrollNext, setCanScrollNext] = useState(false);

	const scrollPrev = useCallback(() => {
		if (emblaApi) {
			emblaApi.scrollPrev();
			// Optionally stop autoplay when manually navigating
			if (autoplay) {
				const autoplayPlugin = emblaApi.plugins().autoplay;
				if (autoplayPlugin && typeof autoplayPlugin.stop === "function") {
					autoplayPlugin.stop();
				}
			}
		}
	}, [emblaApi, autoplay]);

	const scrollNext = useCallback(() => {
		if (emblaApi) {
			emblaApi.scrollNext();
			// Optionally stop autoplay when manually navigating
			if (autoplay) {
				const autoplayPlugin = emblaApi.plugins().autoplay;
				if (autoplayPlugin && typeof autoplayPlugin.stop === "function") {
					autoplayPlugin.stop();
				}
			}
		}
	}, [emblaApi, autoplay]);
	const scrollTo = useCallback(
		(index: number) => {
			if (emblaApi) {
				emblaApi.scrollTo(index);
				// Optionally stop autoplay when manually navigating
				if (autoplay) {
					const autoplayPlugin = emblaApi.plugins().autoplay;
					if (autoplayPlugin && typeof autoplayPlugin.stop === "function") {
						autoplayPlugin.stop();
					}
				}
			}
		},
		[emblaApi, autoplay],
	);

	const onInit = useCallback((emblaApi: EmblaCarouselType) => {
		setScrollSnaps(emblaApi.scrollSnapList());
	}, []);

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setSelectedIndex(emblaApi.selectedScrollSnap());
		setCanScrollPrev(emblaApi.canScrollPrev());
		setCanScrollNext(emblaApi.canScrollNext());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onInit(emblaApi);
		onSelect(emblaApi);
		emblaApi.on("reInit", onInit);
		emblaApi.on("reInit", onSelect);
		emblaApi.on("select", onSelect);

		return () => {
			emblaApi.off("reInit", onInit);
			emblaApi.off("reInit", onSelect);
			emblaApi.off("select", onSelect);
		};
	}, [emblaApi, onInit, onSelect]);
	return (
		<div className={cn("mx-auto", classNames)}>
			{data && (
				<div className="overflow-auto pb-2">
					<div className="w-fit mx-auto flex touch-manipulation gap-[6px] justify-center md:gap-3 items-center">
						{scrollSnaps.map((_, index) => (
							<button
								key={crypto.randomUUID()}
								type="button"
								onClick={() => scrollTo(index)}
								className={cn(
									"border border-grey-300 py-1 md:py-2 px-2 md:px-3 font-semibold rounded-full text-grey-800 text-xs",
									index === selectedIndex ? "bg-primary-dark text-white" : "",
								)}
							>
								{data[index].title}
							</button>
						))}
					</div>
				</div>
			)}
			{showArrows && (
				<div className="flex flex-col md:flex-row items-end justify-between">
					<div className="flex flex-col gap-4">
						<h2 className="text-primary-dark text-3xl md:text-4xl font-dms-serif">
							Starter Menu
						</h2>
						<p className="text-sm md:text-base max-w-[558px] text-body-alt">
							While we are working on the official physical launch later in the
							year, we are opening access to our starter menu from $100:
						</p>
					</div>
					<div className="flex items-center justify-end gap-2  mt-3 md:mt-24">
						<button
							type="button"
							onClick={() => {
								scrollPrev();
							}}
							disabled={!canScrollPrev}
							className={cn(
								"md:w-10 md:h-10 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
							)}
						>
							<ArrowLeft className="w-4 h-4 md:w-6 md:h-6" />
						</button>
						<button
							type="button"
							onClick={scrollNext}
							disabled={!canScrollNext}
							className={cn(
								"md:w-10 md:h-10 w-7 h-7 rounded-full bg-white shadow-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
							)}
						>
							<ArrowRight className="w-4 h-4 md:w-6 md:h-6" />
						</button>
					</div>
				</div>
			)}
			<div className="overflow-hidden" ref={emblaRef}>
				{children}
			</div>
		</div>
	);
};
export default AppCarousel;
