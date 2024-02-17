import Building from '@/assets/icons/building';
import Hearts from '@/assets/icons/hearts';
import Message from '@/assets/icons/message';
import Zap from '@/assets/icons/zap';

const Culture = () => {
	return (
		<section className='py-[90px] bg-black container flex flex-col items-center justify-center bg-motto bg-no-repeat bg-cover'>
			<h2 className='text-4xl font-dms-serif text-white mb-10'>
				Guiding Culture
			</h2>
			<div className='grid bg-white md:grid-cols-2'>
				<div className='px-8 md:px-[50px] min-h-[237px] py-10 bg-white text-body-alt flex flex-col gap-5'>
					<Hearts />
					<h2 className='text-primary-dark font-dms-serif text-[28px] leading-none'>
						Respect everyone
					</h2>
					<p className='max-w-[415px] leading-tight'>
						We treat everyone (partners, deBukaneers, everyone) with dignity. We
						cannot disrespect another for differences of opinions or beliefs.
					</p>
				</div>
				<div className='px-8 md:px-[50px] min-h-[237px] py-10 bg-[#EBFFF1] text-body-alt flex flex-col gap-5'>
					<Message />
					<h2 className='text-primary-dark font-dms-serif text-[28px] leading-none'>
						Communicate clearly
					</h2>
					<p className='max-w-[415px] leading-tight'>
						Communicate when you have to and listen when others need to
						communicate. Ask clarifying questions when anything is unclear. To
						communicate clearly is to speak, listen, validate and document.  
					</p>
				</div>
				<div className='px-8 md:px-[50px] min-h-[237px] py-10 bg-[#EBFFF1] text-body-alt flex flex-col gap-5'>
					<Zap />
					<h2 className='text-primary-dark font-dms-serif text-[28px] leading-none'>
						Go the extra
					</h2>
					<p className='max-w-[415px] leading-tight'>
						Knowing that serving others is a privilege, everyone gets their
						hands dirty to deliver elevated hospitality like no other.
					</p>
				</div>
				<div className='px-8 md:px-[50px] min-h-[237px] py-10 bg-white text-body-alt flex flex-col gap-5'>
					<Building />
					<h2 className='text-primary-dark font-dms-serif text-[28px] leading-none'>
						Be tribe-minded
					</h2>
					<p className='max-w-[415px] leading-tight'>
						We are obsessed about building a tribe devoted to the act of giving
						people what they deserve and more.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Culture;
