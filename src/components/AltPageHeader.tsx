const AltPageHeader = ({ title }: { title: string }) => {
	return (
		<div className='h-[348px] bg-privacy-base md:bg-privacy bg-contain bg-no-repeat bg-bottom -mt-[72px] bg-primary-dark w-full flex justify-center items-center'>
			<h2 className='text-4xl text-white md:text-4xl lg:text-5xl font-semibold font-dms-serif'>
				{title}
			</h2>
		</div>
	);
};

export default AltPageHeader;
