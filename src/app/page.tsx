import About from '@/components/about';
import Hero from '@/components/hero';
import StarterMenu from '@/components/starter-menu';
import Orderings from '@/components/orderings';
import Motto from '@/components/motto';
import Hearts from '@/assets/icons/hearts';
import Message from '@/assets/icons/message';
import Zap from '@/assets/icons/zap';
import Building from '@/assets/icons/building';
import Culture from '@/components/culture';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between bg-grey-100'>
			<Hero />
			<About />
			<StarterMenu />
			<Orderings />
			<Motto />
			<section className='mx-auto max-w-[1440px] text-center bg-[#F1F1F1] w-full pt-[93px] pb-[289px]'>
				<h2 className='text-primary-dark text-4xl font-dms-serif'>
					Fundamental Promise
				</h2>
				<p className='text-body-alt mt-5'>
					Our fundamentals define our promises to our partners regarding our
					cuisines.
				</p>
			</section>
			<Culture />
		</main>
	);
}
