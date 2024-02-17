import Menu from '@/assets/icons/menu';
import Link from 'next/link';

export const Navbar = () => {
	return (
		<nav className='container py-6 flex justify-between items-center'>
			<Menu />
			<Link href={'/'} className='text-primary-light'>
				Join the party
			</Link>
		</nav>
	);
};
