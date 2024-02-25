'use client';

import Menu from '@/assets/icons/menu';
import { Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import MenuDrawer from './menuDrawer';
import WaitlistModal from './waitlistModal';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	function openMenu() {
		setIsOpen(true);
		document.body.classList.add('overflow-hidden');
	}

	function closeMenu() {
		setIsOpen(false);
		document.body.classList.remove('overflow-hidden');
	}

	return (
		<nav
			className={`sticky ${
				pathname === '/' ? 'bg-black' : 'bg-primary-dark'
			} top-0 z-50`}
		>
			<div className='container py-5 flex justify-between items-center'>
				<button
					onClick={() => {
						openMenu();
					}}
					className='cursor-pointer'
				>
					<Menu />
				</button>
				{pathname !== '/' && (
					<Link
						href={'/'}
						className='relative hidden md:block w-[118px] h-[50px]'
					>
						<Image src={'/svgs/debuka-white.svg'} alt='debuka white' fill />
					</Link>
				)}
				<WaitlistModal />
			</div>
			<Transition
				show={isOpen}
				enter='ease-out duration-300'
				enterFrom='-translate-x-full'
				enterTo='translate-x-0'
				leave='transition ease-in-out duration-300 transform'
				leaveFrom='translate-x-0'
				leaveTo='-translate-x-full'
				as={Fragment}
			>
				<MenuDrawer closeMenu={closeMenu} />
			</Transition>
		</nav>
	);
};
