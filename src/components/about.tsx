const About = () => {
	return (
		<section id='about' className='bg-black w-full pt-16 xl:pt-28'>
			<div className='container px-0 bg-cover bg-no-repeat bg-resturant'>
				<div className='flex justify-center h-[680px] md:h-[900px] px-7 w-full bg-gradient-to-b from-black to-transparent'>
					<div className='max-w-[708px] text-white text-center'>
						<h2 className='text-3xl md:text-4xl font-dms-serif about'>About</h2>
						<p className='mt-5 text-grey-200 text-sm md:text-base font-light'>
							deBuka crafts unique Nigerian cuisines using its own kitchen-made spices and fresh, natural ingredients—completely free from off-the-shelf additives.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
