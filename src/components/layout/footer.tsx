"use client";

import Arrow from "@/assets/icons/arrow";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";
import toast from "react-hot-toast";
import InstagramIcon from "@/assets/icons/instagram";

const Footer = () => {
	const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID || "";
	const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
	const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY || "";
	const [loading, setLoading] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		const form = event.currentTarget;

		emailjs
			.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current || "", {
				publicKey: PUBLIC_KEY,
			})
			.then(
				() => {
					toast.success("Thanks for signing up");
				},
				(error) => {
					console.log("FAILED...", error.text);
					toast.error("Something went wrong, try again");
				},
			)
			.finally(() => {
				form.reset();
				setLoading(false);
			});
	};

	return (
		<footer className="container xl:px-[189px] bg-black">
			<div className="relative w-[79px] mt-7 h-[34px]">
				<Image src={"/svgs/debuka-white.svg"} alt="debuka white" fill />
			</div>
			<div className="flex flex-col items-start md:flex-row md:items-center justify-between gap-5 py-5">
				<Link
					href={"https://www.instagram.com/debuka_ca"}
					target="_blank"
					className="flex items-center cursor-pointer group gap-2"
				>
					<InstagramIcon />
					<span className="text-[#5F738C] group-hover:underline">
						Instagram
					</span>
				</Link>
				<div className="flex flex-col text-white items-start md:flex-row md:items-center gap-2">
					<span className="text-sm">Sign up to our mailing list</span>
					<form
						ref={formRef}
						onSubmit={onSubmitHandler}
						className={cn(
							"border border-primary rounded-[10px] flex gap-2 items-center py-3 px-4",
						)}
					>
						<input
							type="email"
							name="user_email"
							className="bg-transparent outline-none text-sm text-white min-w-[228px] flex-1"
							placeholder="Your email here"
						/>
						<input
							type="text"
							name="message"
							defaultValue="Invite me to the physical launch party!"
							className="py-3 px-2 border border-grey-200 text-body-alt outline-none rounded-lg"
							hidden
						/>
						<button
							disabled={loading}
							type="submit"
							className=" disabled:cursor-not-allowed"
						>
							{loading ? <div className="custom-loader" /> : <Arrow />}
						</button>
					</form>
				</div>
			</div>
			<div className="flex flex-col md:flex-row gap-2 justify-between text-sm md:text-base border-t text-body-alt border-grey-900 py-[30px]">
				<span>Copyright {new Date().getFullYear()} | All rights reserved</span>
				<div className="flex items-center gap-8">
					<Link href={"/faq"} className="hover:underline hover:text-white">
						faq
					</Link>
					<Link
						href={"/terms-and-condition"}
						className="hover:underline hover:text-white"
					>
						Terms of Service
					</Link>
					<Link href={"/privacy"} className="hover:underline hover:text-white">
						Privacy Policy
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
