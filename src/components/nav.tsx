'use client';

import { Close } from '@/assets/icons/close';
import Menu from '@/assets/icons/menu';
import { Transition } from '@headlessui/react';
import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import MenuDrawer from './menuDrawer';
import WaitlistModal from './waitlistModal';

export const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	function openMenu() {
		setIsOpen(true);
		document.body.classList.add('overflow-hidden');
	}

	function closeMenu() {
		setIsOpen(false);
		document.body.classList.remove('overflow-hidden');
	}

	return (
		<nav className='container sticky bg-black top-0 py-6 flex justify-between items-center'>
			<button
				onClick={() => {
					openMenu();
				}}
				className='cursor-pointer'
			>
				<Menu />
			</button>
			<WaitlistModal />
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