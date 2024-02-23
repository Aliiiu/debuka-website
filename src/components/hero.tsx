import Image from 'next/image';

const Hero = () => {
	return (
		<section className='relative w-full h-[calc(100vh-72px)] md:h-auto bg-black'>
			<div className='container h-fit md:h-[calc(800px-72px)] flex justify-center pt-[140px] md:pb-[200px] md:pt-[180px]'>
				<div className='flex flex-col items-center'>
					<div className='w-[250px] md:w-[321px] h-[109px] md:h-[136px]'>
						<Image
							src={'/svgs/debuka.svg'}
							alt='debuka logo'
							width={321}
							height={136}
							className='object-contain h-auto max-w-full'
						/>
					</div>

					<span className='text-primary font-extralight mt-2 md:mt-6 text-sm md:text-xl leading-[26px] pl-[0.5em] tracking-[0.5em]'>
						BEYOND FOOD
					</span>
				</div>
			</div>
			<div className='absolute bottom-0 w-full bg-masked-full-base md:bg-masked-full bg-no-repeat bg-center bg-contain h-[190px] md:h-[400px] xl:h-[680px]' />
		</section>
	);
};

export default Hero;
