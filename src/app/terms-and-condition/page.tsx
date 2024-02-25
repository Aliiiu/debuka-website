import AltPageHeader from '@/components/AltPageHeader';

export default function TnCPage() {
	return (
		<main className='flex min-h-screen flex-col items-center bg-grey-100'>
			<AltPageHeader title='Terms and Conditions' />
			<div className='container flex flex-col md:flex-row gap-10 py-10 md:py-14'>
				<div className='max-w-[185px] hidden md:block'>
					<h2>Terms of use</h2>
					<ul className='text-body-alt pt-2 list-inside'>
						<li className='px-4 py-2 cursor-pointer hover:underline'>
							Background
						</li>
						<li className='px-4 py-2 cursor-pointer hover:underline'>
							Definition
						</li>
						<li className='px-4 py-2 cursor-pointer hover:underline'>Topic</li>
					</ul>
				</div>
				<div className='flex-1 flex flex-col gap-10'>
					<span className='text-brand'>Last Updated: February 8, 2023</span>
					<section>
						<h2 className='text-header font-bold text-lg'>Background</h2>
						<ul className='pt-6 text-body-alt list-inside text-sm list-decimal'>
							<li>
								Lorem ipsum dolor sit amet consectetur. Vestibulum enim lorem in
								diam. Purus magna ac ipsum pretium sed adipiscing nec nisl.
								Consectetur dui tempor nullam semper purus eget enim suscipit
								pulvinar. Faucibus dui a eget montes consequat nunc gravida
								lacus sed. Nec nam eros est in amet eu ante. Non imperdiet duis
								ac tellus. Lacus iaculis facilisis nulla varius. Sed et viverra
								ut ut. Lobortis laoreet phasellus ac purus risus elit maecenas.
								Feugiat auctor leo euismod magna viverra pulvinar ac posuere.
								Amet sed posuere vitae et sed sed. Iaculis eget non lectus
								tortor sit justo. Sit est nisl donec donec nunc.
							</li>
							<li>
								At eu ullamcorper turpis nec ultricies volutpat lorem amet. In
								faucibus urna aliquet volutpat arcu rhoncus sit nisi. Auctor
								egestas egestas vulputate turpis. Purus varius amet diam libero.
								Euismod erat gravida proin metus amet arcu. Viverra faucibus
								donec orci massa leo. Pretium gravida elit adipiscing bibendum
								tortor at facilisi. Vestibulum interdum.
							</li>
						</ul>
					</section>
					<section>
						<li className='font-bold text-header list-decimal text-lg'>
							Definition
						</li>
						<p className='text-sm text-body-alt'>
							Lorem ipsum dolor sit amet consectetur. Feugiat et a auctor id
							cursus nam ornare vulputate. Dui orci commodo lectus eget
							consequat. Tincidunt felis enim felis tortor augue purus. Gravida
							lobortis neque praesent vel mi magna ultrices iaculis non.
							Ullamcorper at et elementum urna id risus id. Eget pellentesque
							auctor mauris tortor euismod. Sapien sagittis convallis et tortor
							vel. Commodo elit sit cursus etiam enim posuere. Nunc mauris amet
							pretium arcu. Mauris vitae lectus quam lorem tortor in
							scelerisque. Malesuada dictum non tincidunt faucibus dolor vel
							cursus pellentesque. Enim eu ut odio vitae ut nullam dis elit.
							Felis ut pellentesque et arcu sed felis enim. Iaculis ut montes
							non laoreet varius placerat. Amet urna purus ipsum semper
							ultricies. Habitasse amet lorem in tincidunt aliquam a lorem.
							Suspendisse nulla in donec commodo facilisi rhoncus tempus nisl
							erat. Laoreet quam egestas aliquet nunc augue scelerisque
							convallis lacus. Mi et lorem est nibh ipsum. Aliquet risus in
							integer morbi. Tellus sit felis id magna. Aliquam vehicula dolor
							purus sem viverra. Dolor adipiscing felis aliquam urna ut ligula
							purus. Adipiscing fermentum aliquam tellus vestibulum vulputate
							consequat nisl. Donec vitae neque lectus sodales sapien amet. Enim
							quis donec sed convallis pellentesque id diam egestas. Ultricies
							scelerisque faucibus aliquet egestas pretium lectus sit
							adipiscing.
						</p>
						<p className='text-sm text-body-alt'>
							Lacus nec tellus ultricies elementum. Diam cursus fermentum
							laoreet facilisis amet volutpat turpis vitae suspendisse. Posuere
							ultrices lorem lectus massa. Integer euismod ante ut vulputate
							fusce pretium arcu augue id. Ultricies odio mattis semper varius
							sit sollicitudin volutpat sed. Ac blandit accumsan mus aliquam
							velit. Nunc quis purus augue neque orci lectus enim a sit. Eget
							adipiscing enim cursus id. Dui amet tempus vitae eleifend arcu. At
							id felis vitae accumsan ut porta. Donec velit habitant mi mi
							elementum suspendisse fringilla.
						</p>
					</section>
				</div>
			</div>
		</main>
	);
}
