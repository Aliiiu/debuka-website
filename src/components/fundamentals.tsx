'use client';

import { fundamentals } from '@/assets/constants/fundamentals';
import Quote from '@/assets/icons/quote';
import AppCarousel from './widget/AppCarousel';

const Fundamentals = () => {
	return (
		<section
			id='our-promises'
			className='mx-auto max-w-[1440px] text-center bg-[#F1F1F1] bg-masked-base md:bg-masked bg-no-repeat bg-contain bg-bottom w-full pt-[100px] md:pt-[93px] pb-[180px] md:pb-[289px]'
		>
			<h2 className='text-primary-dark font-semibold text-4xl font-dms-serif'>
				Fundamental Promise
			</h2>
			<p className='text-body-alt mt-3'>
				Our fundamentals define our promises to our partners regarding our
				cuisines.
			</p>
			<div className='mt-10'>
				<div className='p-6'>
					<AppCarousel data={fundamentals}>
						<div className='flex touch-pan-y pt-5'>
							{fundamentals.map((item) => (
								<div
									key={item.id}
									className='min-w-0 flex flex-col items-center gap-5 flex-[0_0_100%]'
								>
									<Quote />
									<span className='font-semibold z-0 text-grey-800 md:text-lg'>
										{item.content}
									</span>
								</div>
							))}
						</div>
					</AppCarousel>
				</div>
			</div>
		</section>
	);
};

export default Fundamentals;
