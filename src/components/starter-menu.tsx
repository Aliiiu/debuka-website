import Image from 'next/image';
import AppCarousel from './widget/AppCarousel';
import Call from '@/assets/icons/call';
import Link from 'next/link';


const StarterMenu = () => {
	return (
		<section 
		id="our-dishes" className='bg-grey-100'>
			<div className='container px-5 md:px-10 xl:px-0 py-[90px] md:pt-[93px] md:pb-[170px] flex flex-col'>
				<div className='max-w-[558px]'>
					<h2 className='text-primary-dark text-4xl font-swis'>
						Starter Menu
					</h2>
					<p className='mt-5 text-sm md:text-base text-body-alt font-swis'>
						While we are working on the official physical launch later in the
						year, we are opening access to our starter menu from $35:
					</p>
				</div>

				<AppCarousel classNames='max-w-[320px] md:max-w-[1000px]'>
					<div className='flex mt-7 '>

						{/* First Image Card */}
						<div className='flex-[0_0_100%] flex flex-col items-center h-auto max-h-[690px] rounded-[20px] overflow-hidden relative group p-0 m-0' >
							<Image
								src={'/images/DSC_8192-Edit.jpg'}
								alt='food-1'
								height={690}
								width={1000}
								layout="intrinsic"
								className=" h-auto w-full"
							/>

							{/* Description Overlay (Visible on Hover) */}
							<div className="absolute bottom-0 left-0 right-0 h-auto min-h-[20%] max-h-[45%] sm:max-h-none bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div style ={{ padding: '15px 50px' }}>
							<span className="text-left text-white text-sm md:text-lg font-semibold font-swis">
									Infused Poultry
								</span>
							</div>
							<div style ={{ padding: '0px 50px', color: 'aquamarine' }}>
							<span className="text-sm md:text-lg font-semibold font-swis">
									C$35
						        </span>
							</div>
							<div style ={{ padding: '0px 50px' }}>
							<span className="text-white text-sm md:text-lg font-swis">
							Fully tenderized chicken or turkey thigh infused with herbs, vegetables and fruits and served with signature buka stew and a choice side: accordion roasted yam, flavored jollof rice, or stuffed plantain.
							</span>
							</div>
							<div style ={{ padding: '25px 50px' }}>
							<Link
								href="https://wa.me/1234567890"
								className='py-2 px-5 rounded flex items-center gap-2 bg-primary w-fit text-xs text-white'
								target="_blank">
								<span className="text-white text-sm md:text-lg font-swis">Order Now</span>
							
							</Link>
							</div>
							
								
									
							
							</div>
						</div>

						{/* Second Image Card */}
						<div className='flex-[0_0_100%] flex flex-col items-center rounded-[20px] h-[684px] overflow-hidden relative group'>
							<Image
								src={'/images/DSC_8171-Edit.jpg'}
								alt='food-2'
								height={684}
								width={1000}
								layout="intrinsic"
								className="h-auto w-full"
							/>

							{/* Description Overlay (Visible on Hover) */}
							<div className="absolute bottom-0 left-0 right-0 min-h-[20%] max-h-[45%] bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div style ={{ padding: '15px 50px' }}>
								<span className="text-white text-sm md:text-lg font-semibold font-swis">
									Red Tilapia
									</span>
							</div>
							<div style ={{ padding: '0px 50px', color: 'aquamarine' }}>
								<span className="text-sm md:text-lg font-semibold font-swis">
									C$35
								</span>
							</div>
							<div style ={{ padding: '0px 50px' }}>
								<span className="text-white text-sm md:text-lg font-swis">
									Lemon washed red tilapia glazed with ground peppered dried fish, herbs and citrus, and served with signature buka stew and a choice side: accordion roasted yam, flavored jollof rice, or stuffed plantain.
								</span>
							</div>
							<div style ={{ padding: '25px 50px' }}>
								<Link
								href="https://wa.me/1234567890"
								className='py-2 px-5 rounded flex items-center gap-2 bg-primary w-fit text-xs text-white'
								target="_blank">
							
								<span className="text-white text-sm md:text-lg font-swis">Order Now</span>
							
							        </Link>
							</div>
						</div>
					</div>
					
				<div className='flex-[0_0_100%] flex flex-col items-center h-auto max-h-[640px] rounded-[20px] overflow-hidden relative group p-0 m-0' >
							<Image
								src={'/images/IMG_1227.jpg'}
								alt='food-1'
								height={640}
								width={1000}
								layout="intrinsic"
								className=" h-auto w-full"
							/>

							{/* Description Overlay (Visible on Hover) */}
							<div className="absolute bottom-0 left-0 right-0 h-auto min-h-[20%] max-h-[45%] sm:max-h-none bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
							<div style ={{ padding: '15px 50px' }}>
							<span className="text-left text-white text-sm md:text-lg font-semibold font-swis">
									Orisirisi Platter
								</span>
							</div>
							<div style ={{ padding: '0px 50px', color: 'aquamarine' }}>
							<span className="text-sm md:text-lg font-semibold font-swis">
									C$35
						        </span>
							</div>
							<div style ={{ padding: '0px 50px' }}>
							<span className="text-white text-sm md:text-lg font-swis ">
							Intentionally packaged platter box containing red tilapia (x2), infused poultry (x2 of chicken and turkey thighs), accordion roasted yam, flavoured jollof rice, stuffed plantain and signature buka stew.
							</span>
							</div>
							<div style ={{ padding: '25px 50px' }}>
							<Link
								href="https://wa.me/1234567890"
								className='py-2 px-5 rounded flex items-center gap-2 bg-primary w-fit text-xs text-white'
								target="_blank">
								<span className="text-white text-sm md:text-lg font-swis">Order Now</span>
							
							</Link>
							</div>
							
								
									
							
							</div>
						</div>

					</div>
				</AppCarousel>
			</div>
		</section>
	);
};

export default StarterMenu;

