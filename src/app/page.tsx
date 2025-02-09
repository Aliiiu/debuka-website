import About from '@/components/about';
import Hero from '@/components/hero';
import StarterMenu from '@/components/starter-menu';
import Orderings from '@/components/orderings';
import Motto from '@/components/motto';
import Scroll from '@/components/scrollButton';
import HomeButton from '@/components/homeButton';
import Culture from '@/components/culture';
import Fundamentals from '@/components/fundamentals';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between bg-grey-100'>
		        <>
			<Hero />
			<About />
			<StarterMenu />
			<Orderings />
			<Motto />
			<Fundamentals />
			<Culture />
			</>
		
		</main>
	);
}
