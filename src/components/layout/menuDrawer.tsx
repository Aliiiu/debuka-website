import { altMenu, homeMenu } from '@/assets/constants/nav-menu';
import { Close } from '@/assets/icons/close';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

type MenuDrawerProps = {
	closeMenu: () => void;
};

const MenuDrawer = React.forwardRef<HTMLDivElement, MenuDrawerProps>(
	({ closeMenu }, ref) => {
		const pathname = usePathname();
		return (
			<div
				ref={ref}
				className='fixed top-0 left-0 w-full z-50 h-screen bg-primary-dark'
			>
				<div className='container px-4 md:px-20 py-5 h-full'>
					<button onClick={() => closeMenu()}>
						<Close />
					</button>
					<div className='h-full flex justify-center items-center'>
						<div className=' flex justify-center -mt-10 text-white gap-4 flex-col font-dms-serif text-2xl md:text-4xl font-bold items-center'>
							{pathname === '/'
								? homeMenu.map((item) => (
										<Link
											key={item.id}
											href={item.href}
											className='hover:underline capitalize transition-all delay-300'
											onClick={() => closeMenu()}
										>
											{item.id}
										</Link>
								  ))
								: altMenu.map((item) => (
										<Link
											key={item.id}
											href={item.href}
											className='hover:underline capitalize transition-all delay-300'
											onClick={() => closeMenu()}
										>
											{item.id}
										</Link>
								  ))}
						</div>
					</div>
				</div>
			</div>
		);
	}
);

MenuDrawer.displayName = 'MenuDrawer';

export default MenuDrawer;
