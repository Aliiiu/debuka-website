import Call from '@/assets/icons/call';
import Check from '@/assets/icons/check';
import Image from 'next/image';
import Link from 'next/link';

const Orderings = () => {
	return (
		<section
			id='reservations'
			className='grid md:grid-cols-2 w-full bg-white text-body-alt max-w-[1440px] mx-auto'
		>
			<div className='flex flex-col py-16 items-center justify-center'>
				<div className='flex flex-col gap-10 px-10'>
					<div>
						<h2 className='text-3xl xl:text-4xl text-primary-dark font-swis'>
							Orderings
						</h2>
						<div className='flex flex-col mt-5 gap-4'>
							<span className='text-body-alt font-swis'>
								Tentatively, orders can be placed by reaching us on Whatsapp
							</span>
							<Link
								href="https://wa.me/1234567890"
								className='py-3 px-10 rounded-full flex items-center gap-2 bg-primary w-fit text-xs text-white'
								target="_blank"
							>
							
								
							
								<span className='font-swis'>Order Now</span>
							
							</Link>
							<p className='text-body-alt text-sm font-swis max-w-[378px]'>
								Delivery fee is free for the first order and a fee of $10 will
								be charged for subsequent orders.
							</p>
						</div>
					</div>
					
					
				</div>
			</div>
			
		
			<div className="w-full h-[50vh] md:h-[70vh] xl:h-[90vh] bg-resturant-2 bg-no-repeat bg-cover bg-center"></div>

		
		
		</section>
	);
};

export default Orderings;
