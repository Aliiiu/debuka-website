'use client';

import Arrow from '@/assets/icons/arrow';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { cn } from '@/lib/utils';
import toast from 'react-hot-toast';

const Footer = () => {
	const SERVICE_ID = process.env.NEXT_PUBLIC_SERVICE_ID || '';
	const TEMPLATE_ID = process.env.NEXT_PUBLIC_TEMPLATE_ID || '';
	const PUBLIC_KEY = process.env.NEXT_PUBLIC_PUBLIC_KEY || '';
	const [loading, setLoading] = useState(false);
	const formRef = useRef<HTMLFormElement>(null);

	const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setLoading(true);

		const form = event.currentTarget;

		emailjs
			.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current || '', {
				publicKey: PUBLIC_KEY,
			})
			.then(
				() => {
					toast.success('Thanks for signing up');
				},
				(error) => {
					console.log('FAILED...', error.text);
					toast.error('Something went wrong, try again');
				}
			)
			.finally(() => {
				form.reset();
				setLoading(false);
			});
	};

	return (
		<footer className='container xl:px-[189px] bg-black'>
			<div className='relative w-[79px] mt-7 h-[34px]'>
				<Image src={'/svgs/debuka-white.svg'} alt='debuka white' fill />
			</div>
			<div className='flex flex-col items-start md:flex-row md:items-center justify-between gap-5 py-5'>
				<Link
					href={'/'}
					target='_blank'
					className='flex items-center cursor-pointer group gap-2'
				>
					<svg
						width='18'
						height='18'
						viewBox='0 0 18 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M5.2896 0.054C6.2496 0.0102 6.5556 0 9 0C11.445 0 11.7504 0.0108 12.7098 0.054C13.668 0.0978 14.3232 0.2508 14.8956 0.4722C15.4959 0.698315 16.0397 1.05253 16.4892 1.5102C16.947 1.95979 17.3012 2.50384 17.5272 3.1044C17.7498 3.6768 17.9022 4.3314 17.946 5.2896C17.9898 6.2496 18 6.5556 18 9C18 11.4444 17.9898 11.7504 17.946 12.7104C17.9022 13.6686 17.7498 14.3232 17.5278 14.8956C17.3017 15.4959 16.9475 16.0397 16.4898 16.4892C16.0398 16.9476 15.4956 17.3016 14.8956 17.5272C14.3232 17.7498 13.6686 17.9022 12.7104 17.946C11.7504 17.9898 11.4444 18 9 18C6.5556 18 6.2496 17.9898 5.2896 17.946C4.3314 17.9022 3.6768 17.7498 3.1044 17.5278C2.50411 17.3017 1.96029 16.9475 1.5108 16.4898C1.0524 16.0398 0.6984 15.4956 0.4728 14.8956C0.2502 14.3232 0.0978 13.6686 0.054 12.7104C0.0102 11.7504 0 11.445 0 9C0 6.555 0.0108 6.2496 0.054 5.2902C0.0978 4.332 0.2508 3.6768 0.4722 3.1044C0.698315 2.5041 1.05253 1.96028 1.5102 1.5108C1.9602 1.0524 2.5044 0.6984 3.1044 0.4728C3.6768 0.2502 4.3314 0.0978 5.2896 0.054ZM7.85079 11.7742C8.21513 11.9251 8.60563 12.0028 8.99999 12.0028C9.79644 12.0028 10.5603 11.6864 11.1234 11.1232C11.6866 10.5601 12.003 9.79623 12.003 8.99979C12.003 8.20334 11.6866 7.43952 11.1234 6.87635C10.5603 6.31318 9.79644 5.99679 8.99999 5.99679C8.60563 5.99679 8.21513 6.07446 7.85079 6.22538C7.48645 6.37629 7.1554 6.59749 6.87655 6.87635C6.5977 7.1552 6.3765 7.48625 6.22558 7.85059C6.07467 8.21493 5.99699 8.60543 5.99699 8.99979C5.99699 9.39415 6.07467 9.78465 6.22558 10.149C6.3765 10.5133 6.5977 10.8444 6.87655 11.1232C7.1554 11.4021 7.48645 11.6233 7.85079 11.7742ZM5.72892 5.72871C6.59646 4.86117 7.7731 4.37379 8.99999 4.37379C10.2269 4.37379 11.4035 4.86117 12.2711 5.72871C13.1386 6.59626 13.626 7.7729 13.626 8.99979C13.626 10.2267 13.1386 11.4033 12.2711 12.2709C11.4035 13.1384 10.2269 13.6258 8.99999 13.6258C7.7731 13.6258 6.59646 13.1384 5.72892 12.2709C4.86137 11.4033 4.37399 10.2267 4.37399 8.99979C4.37399 7.7729 4.86137 6.59626 5.72892 5.72871ZM14.6515 5.06301C14.8566 4.85794 14.9718 4.5798 14.9718 4.28979C14.9718 3.99977 14.8566 3.72164 14.6515 3.51657C14.4464 3.3115 14.1683 3.19629 13.8783 3.19629C13.5883 3.19629 13.3101 3.3115 13.1051 3.51657C12.9 3.72164 12.7848 3.99977 12.7848 4.28979C12.7848 4.5798 12.9 4.85794 13.1051 5.06301C13.3101 5.26808 13.5883 5.38329 13.8783 5.38329C14.1683 5.38329 14.4464 5.26808 14.6515 5.06301Z'
							fill='#C6FFD7'
						/>
					</svg>
					<span className='text-[#5F738C] group-hover:underline'>
						Instagram
					</span>
				</Link>
				<div className='flex flex-col text-white items-start md:flex-row md:items-center gap-2'>
					<span className='text-sm'>Sign up to our mailing list</span>
					<form
						ref={formRef}
						onSubmit={onSubmitHandler}
						className={cn(
							'border border-primary rounded-[10px] flex gap-2 items-center py-3 px-4'
						)}
					>
						<input
							type='text'
							name='email'
							className='bg-transparent outline-none text-sm text-white min-w-[228px] flex-1'
							placeholder='Your email here'
						/>
						<button
							disabled={loading}
							type='submit'
							className=' disabled:cursor-not-allowed'
						>
							{loading ? <div className='custom-loader'></div> : <Arrow />}
						</button>
					</form>
				</div>
			</div>
			<div className='flex flex-col md:flex-row gap-2 justify-between text-sm md:text-base border-t text-body-alt border-grey-900 py-[30px]'>
				<span>Copyright {new Date().getFullYear()} | All rights reserved</span>
				<div className='flex items-center gap-8'>
					<Link
						href={'/terms-and-condition'}
						className='hover:underline hover:text-white'
					>
						Terms of Service
					</Link>
					<Link href={'/privacy'} className='hover:underline hover:text-white'>
						Privacy Policy
					</Link>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
