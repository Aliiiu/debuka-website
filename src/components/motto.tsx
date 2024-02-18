import Eye from '@/assets/icons/eye';
import Mision from '@/assets/icons/mission';
import Style from '@/assets/icons/style';

const Motto = () => {
	return (
		<section
			id='our-promises'
			className='py-[150px] container flex justify-center bg-motto bg-no-repeat bg-cover'
		>
			<div className='grid md:grid-cols-3 bg-white'>
				<div className='px-[30px] min-h-[327px] py-8 bg-[#EBFFF1] text-body-alt flex flex-col gap-5'>
					<Eye />
					<h2 className='text-primary-dark font-dms-serif text-[28px] leading-none'>
						Vision
					</h2>
					<p className='max-w-[240px] leading-tight'>
						deBuka’s mission is to make Nigerian cuisines known globally,
						uniquely.
					</p>
				</div>
				<div className='px-[30px] min-h-[327px] py-8 border-none bg-white text-body-alt flex flex-col gap-5'>
					<Mision />
					<h2 className='text-primary-dark font-dms-serif text-[28px] leading-none'>
						Mission
					</h2>
					<p className='max-w-[294px] leading-tight'>
						Our mission is to curate dining experiences – that are authentic,
						inclusive, creative, incomparable and exceptional – with ingredients
						primarily from Nigeria but integrated with those from all over the
						world.
					</p>
				</div>
				<div className='px-[30px] min-h-[327px] py-8 bg-white text-body-alt flex flex-col gap-5'>
					<Style />
					<h2 className='text-primary-dark font-dms-serif text-[28px] leading-none'>
						Style
					</h2>
					<p className='max-w-[294px] leading-tight'>
						Our style is an elevated fine-dining style, done differently
						contrary to conventional norms. It delivers healthy and quality
						menus in an amiable calming ambience - providing unparalleled
						experiences away from home.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Motto;
