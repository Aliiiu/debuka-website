import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';
import './globals.css';
import Menu from '@/assets/icons/menu';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Arrow from '@/assets/icons/arrow';

const dmSans = DM_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'deBuka',
	description: 'Beyond Food',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={cn(dmSans.className, 'bg-black')}>
				<nav className='container py-6 flex justify-between items-center'>
					<Menu />
					<Link href={'/'} className='text-primary-light'>
						Join the party
					</Link>
				</nav>
				{children}
				<footer className='container xl:px-[189px] bg-black'>
					<div className='flex flex-col items-start justify-between gap-5 py-[30px]'>
						<div className='relative w-[79px] h-[34px]'>
							<Image src={'/svgs/debuka-white.svg'} alt='debuka white' fill />
						</div>
						<div className='flex flex-col text-white items-start md:flex-row md:items-center gap-2'>
							<span>Sign up to our mailing list</span>
							<div className='border border-primary rounded-[10px] flex gap-2 items-center py-3 px-4'>
								<input
									type='text'
									className='bg-transparent outline-none text-white min-w-[228px] flex-1'
									placeholder='Your email here'
								/>
								<Arrow />
							</div>
						</div>
					</div>
					<div className='flex flex-col gap-2 justify-between text-sm md:text-base border-t text-body-alt border-grey-900 py-[30px]'>
						<span>Copyright 2024 | All rights reserved</span>
						<div className='flex items-center gap-8'>
							<span>Terms of service</span>
							<span>Privacy policy</span>
						</div>
					</div>
				</footer>
			</body>
		</html>
	);
}
