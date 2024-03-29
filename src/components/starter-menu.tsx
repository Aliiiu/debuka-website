import Image from 'next/image';
import AppCarousel from './widget/AppCarousel';

const StarterMenu = () => {
	return (
		<section id='our-dishes' className='bg-grey-100'>
			<div className='container px-5 md:px-10 xl:px-0 py-[90px] md:pt-[93px] md:pb-[170px] flex flex-col items-center'>
				<div className='text-center max-w-[558px]'>
					<h2 className='text-primary-dark text-4xl font-dms-serif'>
						Starter Menu
					</h2>
					<p className='mt-5 text-sm md:text-base text-body-alt text-center'>
						While we are working on the official physical launch later in the
						year, we are opening access to our starter menu from $35:
					</p>
				</div>
				<AppCarousel classNames='max-w-[320px] md:max-w-[500px]'>
					<div className='flex mt-7 md:mt-24'>
						<div className='min-w-0 flex-[0_0_100%] bg-white py-10 xl:px-10 flex flex-col items-center rounded-[20px]'>
							<div className='w-[227px] xl:w-[393px] md:h-[346px] xl:h-[490px]'>
								<Image
									src={'/images/food-1.webp'}
									alt='food-1'
									width={393}
									height={490}
									className='object-contain h-auto max-w-full'
								/>
							</div>
							<span className=' md:text-lg text-center xl:text-2xl mt-5 font-dms-serif'>
								Stuffed Dùndú Roll with Turkey Tail
							</span>
						</div>
						<div className='min-w-0 flex-[0_0_100%] bg-white py-10 xl:px-10 flex flex-col items-center rounded-[20px]'>
							<div className='w-[227px] xl:w-[386px] md:h-[346px] xl:h-[490px]'>
								<Image
									src={'/images/food-2.webp'}
									alt='food-1'
									width={386}
									height={490}
									className='object-contain h-fit max-w-full'
								/>
							</div>
							<span className=' md:text-lg text-center xl:text-2xl mt-5 font-dms-serif'>
								Stuffed Bòlì Bowl with Red Tilapia
							</span>
						</div>
					</div>
				</AppCarousel>
			</div>
		</section>
	);
};

export default StarterMenu;
