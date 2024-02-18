import { Close } from '@/assets/icons/close';
import Link from 'next/link';
import React from 'react';

type MenuDrawerProps = {
	closeMenu: () => void;
};

const MenuDrawer = React.forwardRef<HTMLDivElement, MenuDrawerProps>(
	({ closeMenu }, ref) => {
		return (
			<div
				ref={ref}
				className='fixed top-0 left-0 px-[30px] md:px-20 py-5 w-full z-50 h-screen bg-primary-dark'
			>
				<button onClick={() => closeMenu()}>
					<Close />
				</button>
				<div className='h-full flex justify-center items-center'>
					<div className=' flex justify-center -mt-10 text-white gap-4 flex-col font-dms-serif text-2xl md:text-4xl font-bold items-center'>
						<Link
							href={'#about'}
							className='hover:underline transition-all delay-300'
							onClick={() => closeMenu()}
						>
							About
						</Link>
						<Link
							href={'#our-dishes'}
							className='hover:underline transition-all delay-300'
							onClick={() => closeMenu()}
						>
							Our Dishes
						</Link>
						<Link
							href={'#reservations'}
							className='hover:underline transition-all delay-300'
							onClick={() => closeMenu()}
						>
							Reservations
						</Link>
						<Link
							href={'#our-promises'}
							className='hover:underline transition-all delay-300'
							onClick={() => closeMenu()}
						>
							Our Promise
						</Link>
						<Link
							href={'#values'}
							className='hover:underline transition-all delay-300'
							onClick={() => closeMenu()}
						>
							Values
						</Link>
					</div>
				</div>
			</div>
		);
	}
);

MenuDrawer.displayName = 'MenuDrawer';

export default MenuDrawer;
