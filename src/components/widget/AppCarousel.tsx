"use client";

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
	data?: any;
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
		<div className={cn("max-w-[500px] mx-auto", classNames)}>
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
				<div className="flex items-end justify-between">
					<div className="flex flex-col gap-4">
						<h2 className="text-primary-dark text-4xl font-dms-serif">
							Starter Menu
						</h2>
						<p className="text-sm md:text-base max-w-[558px] text-body-alt">
							While we are working on the official physical launch later in the
							year, we are opening access to our starter menu from $35:
						</p>
					</div>
					<div className="flex items-center justify-end gap-2  mt-7 md:mt-24">
						<button
							type="button"
							onClick={() => {
								scrollPrev();
							}}
							disabled={!canScrollPrev}
							className={cn(
								"w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
							)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<title>Prev Icon</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M15.75 19.5L8.25 12l7.5-7.5"
								/>
							</svg>
						</button>
						<button
							type="button"
							onClick={scrollNext}
							disabled={!canScrollNext}
							className={cn(
								"w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed",
							)}
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-6 h-6"
							>
								<title>Next Icon</title>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M8.25 4.5l7.5 7.5-7.5 7.5"
								/>
							</svg>
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
