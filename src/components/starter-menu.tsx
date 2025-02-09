import Image from "next/image";
import AppCarousel from "./widget/AppCarousel";
import Link from "next/link";

interface MenuItemProps {
	imageSrc: string;
	width: number;
	height: number;
	title: string;
	price: string;
	description: string;
}

const menuItems = [
	{
		imageSrc: "/images/food-1.webp",
		width: 393,
		height: 490,
		title: "Red Tilapia",
		description:
			"Lemon-washed red tilapia glazed with grounded peppered dried fish, herbs and citrus, and served with signature buka stew and a choice side: accordion roasted yam, flavoured jollof rice or stuffed plantain.",
		price: "C$35",
	},
	{
		imageSrc: "/images/food-2.webp",
		width: 386,
		height: 490,
		title: "Infused Poultry",
		price: "C$35",
		description:
			"Carefully tenderized chicken or turkey thigh infused with herbs, vegetables and fruits, and served with signature buka stew and a choice side: accordion roasted yam, flavoured jollof rice or stuffed plantain.",
	},
	{
		imageSrc: "/images/food-2.webp",
		width: 386,
		height: 490,
		title: "Orisirisi Platter",
		price: "C$35",
		description:
			"Intentionally-packaged platter box containing red tilapia(x2), infused poultry(x2 of chicken & turkey thighs), accordion roasted yam, flavoured jollof rice, stuffed plantain and signature buka stew.",
	},
];

const StarterMenu = () => {
	return (
		<section id="our-dishes" className="bg-grey-100">
			<div className="container px-5 md:px-10 xl:px-0 py-[90px] md:pt-[93px] md:pb-[170px] flex flex-col items-center">
				<div className="text-center max-w-[558px]">
					<h2 className="text-primary-dark text-4xl font-dms-serif">
						Starter Menu
					</h2>
					<p className="mt-5 text-sm md:text-base text-body-alt text-center">
						While we are working on the official physical launch later in the
						year, we are opening access to our starter menu from $35:
					</p>
				</div>
				<AppCarousel classNames="max-w-full lg:max-w-[1063px]">
					<div className="flex mt-7 md:mt-24">
						{menuItems.map((item) => (
							<MenuItem key={crypto.randomUUID()} {...item} />
						))}
					</div>
				</AppCarousel>
			</div>
		</section>
	);
};

export default StarterMenu;

const MenuItem = ({
	imageSrc,
	width,
	height,
	title,
	price,
	description,
}: MenuItemProps) => (
	<div className="min-w-0 flex-[0_0_100%] bg-white py-10 xl:px-10 flex flex-col items-center rounded-[20px] group relative">
		<div className="w-[227px] xl:w-[393px] md:h-[346px] xl:h-[490px]">
			<Image
				src={imageSrc}
				alt={title}
				width={width}
				height={height}
				className="object-contain h-auto max-w-full"
			/>
		</div>
		<section className="absolute bottom-0 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
			<div className="bg-[#131313]/20 backdrop-blur-[50] flex flex-col gap-6 w-full p-6">
				<div className="flex flex-col gap-2">
					<h2 className="text-white md:text-2xl font-semibold font-dms-serif">
						{title}
					</h2>
					<span className="font-semibold text-primary-light">{price}</span>
					<p className="text-grey-100 text-sm">{description}</p>
				</div>
				<Link
					href={"whatsapp://send?phone=+2340000000000"}
					className="bg-primary w-fit text-white px-4 py-2 rounded-lg"
				>
					Order Now
				</Link>
			</div>
		</section>
	</div>
);
