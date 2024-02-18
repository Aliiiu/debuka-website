import Image from 'next/image';

const Hero = () => {
	return (
		<section className='w-full bg-black'>
			<div className='container md:h-[calc(800px-72px)] flex justify-center pt-[140px] pb-[200px] md:pt-[180px]'>
				<div>
					<div className='w-[250px] md:w-[321px] h-[109px] md:h-[136px]'>
						<Image
							src={'/svgs/debuka.svg'}
							alt='debuka logo'
							width={321}
							height={136}
							className='object-contain h-auto max-w-full'
						/>
					</div>

					<h3 className='text-primary text-center mt-4 md:mt-6 text-xl leading-[26px] tracking-[0.5em]'>
						BEYOND FOOD
					</h3>
				</div>
			</div>
		</section>
	);
};

export default Hero;
