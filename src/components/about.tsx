const About = () => {
	return (
		<section id='about' className='bg-black w-full pt-16 xl:pt-28'>
			<div className='container px-0 bg-cover bg-no-repeat bg-resturant'>
				<div className='flex justify-center h-[680px] md:h-[900px] px-7 w-full bg-gradient-to-b from-black to-transparent'>
					<div className='max-w-[708px] text-white text-center'>
						<h2 className='text-3xl md:text-4xl font-dms-serif about'>About</h2>
						<p className='mt-5 text-grey-200 text-sm md:text-base font-light'>
							deBuka is a fine-dining company that aims to elevate 
							people from all cultures by creating unparalleled
							dining experiences with innovative Nigerian cuisines.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
