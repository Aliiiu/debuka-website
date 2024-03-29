import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import Footer from '@/components/layout/footer';
import { Navbar } from '@/components/layout/nav';
import { Toaster } from 'react-hot-toast';

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
				<Toaster />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
