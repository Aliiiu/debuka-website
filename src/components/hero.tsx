"use client";

import Image from "next/image";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import ArrowDownIcon from "@/assets/icons/arrow-down";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	useEffect(() => {
		gsap.to("#logo", {
			scrollTrigger: {
				trigger: "#about",
				start: "top bottom",
				end: "+=350",
				scrub: true,
			},
			opacity: 0,
		});
	}, []);
	return (
		<section className="relative w-full bg-black">
			<div
				id="hero"
				className="container h-screen md:h-[calc(100vh-64px)] -mt-[70px] md:mt-0 flex items-center md:items-start justify-center pt-0 md:pb-[200px] md:pt-[180px]"
			>
				<div className="flex flex-col items-center">
					<div className="overflow-hidden">
						<div
							id="logo"
							className="w-[200px] md:w-[321px] h-fit md:h-[136px]"
						>
							<Image
								src={"/svgs/debuka.svg"}
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
			<Link
				href={"#our-dishes"}
				className="bg-primary-light/10 z-10 absolute bottom-20 left-1/2 -translate-x-1/2 px-6 py-3 rounded-lg font-semibold cursor-pointer font-sans text-white"
			>
				<span>Order Now</span>
				<ArrowDownIcon className="inline-block ml-2" />
			</Link>
			<div className="mock md:hidden lg:block absolute -bottom-10 md:-bottom-40 xl:-bottom-40 w-full bg-masked-full-base md:bg-masked-full bg-no-repeat bg-center bg-contain h-[190px] md:h-[400px] xl:h-[680px]" />
		</section>
	);
};

export default Hero;
