'use client';

import Arrow from '@/assets/icons/arrow';
import Image from 'next/image';
import React from 'react';

const Footer = () => {
	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const form = event.currentTarget;
		const messageInput = form.elements.namedItem('email') as HTMLInputElement;
		const emailAddress = messageInput.value.trim();
		console.log(emailAddress);
		form.reset();
	};

	return (
		<footer className='container xl:px-[189px] bg-black'>
			<div className='flex flex-col items-start md:flex-row justify-between gap-5 py-[30px]'>
				<div className='relative w-[79px] h-[34px]'>
					<Image src={'/svgs/debuka-white.svg'} alt='debuka white' fill />
				</div>
				<div className='flex flex-col text-white items-start md:flex-row md:items-center gap-2'>
					<span className='text-sm'>Sign up to our mailing list</span>
					<form
						onSubmit={onSubmitHandler}
						className='border border-primary rounded-[10px] flex gap-2 items-center py-3 px-4'
					>
						<input
							type='text'
							name='email'
							className='bg-transparent outline-none text-sm text-white min-w-[228px] flex-1'
							placeholder='Your email here'
						/>
						<button type='submit'>
							<Arrow />
						</button>
					</form>
				</div>
			</div>
			<div className='flex flex-col md:flex-row gap-2 justify-between text-sm md:text-base border-t text-body-alt border-grey-900 py-[30px]'>
				<span>Copyright {new Date().getFullYear()} | All rights reserved</span>
				<div className='flex items-center gap-8'>
					<span>Terms of service</span>
					<span>Privacy policy</span>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
