import Check from "@/assets/icons/check";
import Link from "next/link";

const Orderings = () => {
	return (
		<section
			id="reservations"
			className="grid md:grid-cols-2 w-full bg-white text-body-alt max-w-[1440px] mx-auto"
		>
			<div className="flex flex-col py-16 items-center justify-center">
				<div className="flex flex-col gap-10 px-10">
					<div>
						<h2 className="text-3xl xl:text-4xl font-semibold text-primary-dark font-dms-serif">
							Orderings
						</h2>
						<div className="flex flex-col mt-5 gap-4">
							<span className="text-body-alt max-w-[420px]">
								Tentatively, orders can be placed by simply clicking the button
								below
							</span>
							<Link
								href={
									"https://wa.me/13067150398?text=Hello! I would like to place an order."
								}
								target="_blank"
								rel="noopener noreferrer"
								className="py-2 px-3 md:px-5 md:py-3 rounded-full flex items-center gap-2 bg-primary w-fit text-xs text-white"
							>
								Order now
							</Link>
							<p className="text-body-alt text-sm max-w-[378px]">
								Delivery fee is free for the first order and a fee will
								be charged for subsequent orders.
							</p>
							<div>
								<h3 className="text-primary font-semibold text-sm">
									Ordering Days:
								</h3>
								<div className="flex items-center mt-2 gap-2">
									<Check />
									<span className="text-sm">Mondays - Thursdays</span>
								</div>
							</div>
							<div>
								<h3 className="text-primary font-semibold text-sm">
									Delivery Days:
								</h3>
								<div className="flex items-center mt-2 gap-2">
									<Check />
									<span className="text-sm">Saturdays - Sundays</span>
								</div>
							</div>
							<div>
								<h3 className="text-primary font-semibold text-sm">
									Service Areas:
								</h3>
								<div className="flex items-center mt-2 gap-2">
									<Check />
									<span className="text-sm max-w-[349px]">
										Hamilton (and cities within including Stoney Creek, Hannon,
										Ancaster, Waterdown and others)
									</span>
								</div>
								<div className="flex items-center mt-[6px] gap-2">
									<Check />
									<span className="text-sm">Binbrook</span>
								</div>
								<div className="flex items-center mt-[6px] gap-2">
									<Check />
									<span className="text-sm">Burlington</span>
								</div>
								<div className="flex items-center mt-[6px] gap-2">
									<Check />
									<span className="text-sm">Oakville</span>
								</div>
								<div className="flex items-center mt-[6px] gap-2">
									<Check />
									<span className="text-sm">Paris</span>
								</div>
								<div className="flex items-center mt-[6px] gap-2">
									<Check />
									<span className="text-sm">Dunnville</span>
								</div>
								<div className="flex items-center mt-[6px] gap-2">
									<Check />
									<span className="text-sm">Grimsby</span>
								</div>
								<div className="flex items-center mt-[6px] gap-2">
									<Check />
									<span className="text-sm">Caledonia</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-[450px] md:h-[700px] xl:h-[900px] bg-resturant-2 bg-no-repeat bg-cover" />
		</section>
	);
};

export default Orderings;
