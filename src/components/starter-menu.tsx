import Image from 'next/image';

const StarterMenu = () => {
	return (
		<section className='bg-grey-100'>
			<div className='container px-5 md:px-0 py-[90px] md:pt-[93px] md:pb-[170px] flex flex-col items-center'>
				<div className='text-center max-w-[558px]'>
					<h2 className='text-primary-dark text-4xl font-dms-serif'>
						Starter Menu
					</h2>
					<p className='mt-5 text-sm md:text-base text-body-alt text-center'>
						While we are working on the official physical launch later in the
						year, we are opening access to our starter menu at $35:
					</p>
				</div>
				<div className='grid w-full md:w-fit md:grid-cols-2 mt-7 md:mt-24 gap-[30px]'>
					<div className='bg-white py-10 px-[62px] md:px-[92px] flex flex-col items-center rounded-[20px]'>
						<div className='relative w-[227px] md:w-[332px] h-[346px] md:h-[507px]'>
							<Image src={'/images/food-1.png'} alt='food-1' fill />
						</div>
						<span className=' md:text-2xl mt-5 font-dms-serif'>
							Roasted Plantain Bowl
						</span>
					</div>
					<div className='bg-white py-10 px-[62px] md:px-[92px] flex flex-col items-center rounded-[20px]'>
						<div className='relative w-[227px] md:w-[332px] h-[346px] md:h-[507px]'>
							<Image src={'/images/food-2.png'} alt='food-1' fill />
						</div>
						<span className=' md:text-2xl mt-5 font-dms-serif'>
							Roasted Plantain Boat with Paddle
						</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default StarterMenu;
