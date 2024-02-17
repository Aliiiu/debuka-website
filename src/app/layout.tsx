import type { Metadata } from 'next';
import { DM_Sans, Inter } from 'next/font/google';
import './globals.css';
import Menu from '@/assets/icons/menu';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Arrow from '@/assets/icons/arrow';
import Footer from '@/components/footer';
import { Navbar } from '@/components/nav';

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
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
