'use client';

import { whatWeAre } from '@/assets/constants/whatWeAre';
import Eye from '@/assets/icons/eye';
import Mision from '@/assets/icons/mission';
import Style from '@/assets/icons/style';
import { useState, useEffect } from 'react';

const Motto = () => {
	// State to track the index of the currently hovered card
	const [hoveredIndex, setHoveredIndex] = useState(0);

	// Set the hover state to the first element by default
	useEffect(() => {
		setHoveredIndex(0);
	}, []);

	return (
		<section
			id=''
			className='py-[150px] container flex justify-center bg-motto bg-no-repeat bg-cover'
		>
			<div className='grid md:grid-cols-3 bg-white'>
				{whatWeAre.map(({ title, content }, index) => (
					<div
						key={title}
						onMouseEnter={() => setHoveredIndex(index)}
						onMouseLeave={() => setHoveredIndex(0)}
						className={`px-[30px] min-h-[327px] xl:min-w-[358px] py-8 active:bg-[#EBFFF1] cursor-pointer hover:bg-[#EBFFF1] text-body-alt flex flex-col gap-5 ${
							hoveredIndex === index ? 'bg-[#EBFFF1]' : 'hover:bg-[#EBFFF1]'
						}`}
					>
						{title === 'Vision' ? (
							<Eye />
						) : title === 'Mission' ? (
							<Mision />
						) : (
							<Style />
						)}
						<h2 className='text-primary-dark font-dms-serif text-[28px] leading-none'>
							{title}
						</h2>
						<p
							className={`${
								title === 'Vision' ? 'max-w-[240px]' : 'max-w-[294px]'
							}  leading-tight`}
						>
							{content}
						</p>
					</div>
				))}
			</div>
		</section>
	);
};

export default Motto;
