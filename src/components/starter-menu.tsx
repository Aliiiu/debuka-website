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
		imageSrc: "/images/red-tilapia.webp",
		width: 393,
		height: 490,
		title: "Leaf-Twined Tilapia",
		description:
			"Lemon-washed, leaf-twined (beans pudding - moinmoin leaf) Red Tilapia glazed with grounded dried Ijebu fish (from Nigeria), dehydrated peppers, herbs and citrus mixture in overnight herbs-vegetables-infused-canola-oil, and served with a signature fermented buka stew and a choice side: accordion roasted peppered yam, flavoured jollof rice or peppered plantain varieties (one of :plantain boat stuffed with vegetables & protein, slightly incised plantain or fully-cut skewered plantain).",
		price: "C$140",
	},
	{
		imageSrc: "/images/infused-poultry.webp",
		width: 386,
		height: 490,
		title: "Infused Poultry",
		price: "C$100",
		description:
			"Carefully tenderized, steamed & roasted chicken or turkey thigh with herbs, vegetables and fruits and glazed with dehydrated grounded peppers, vegetables, herbs & fruits mixture in overnight herbs-vegetables-infused-canola-oil and served with a signature fermented buka stew and a choice side: accordion peppered roasted yam, flavoured jollof rice or peppered plantain varieties (one of: plantain boat stuffed with vegetables & blended protein, slightly incised plantain, or fully-cut skewered plantain).",
	},
	{
		imageSrc: "/images/orisirisi.webp",
		width: 386,
		height: 490,
		title: "Orisirisi Platter",
		price: "C$450",
		description:
			"A 17’x13’x6’ platter box containing Red Tilapia (x2), infused chicken and turkey thigh (x1 each or x2 for either), accordion roasted yam (5 pieces), flavoured jollof rice (one 34 oz bowl), signature fermented buka stew and plantain varieties - stuffed plantain boat, plantain kebab and fully-cut skewered plantain.",
	},
];

const StarterMenu = () => {
	return (
		<section id="our-dishes" className="bg-grey-100">
			<div className="container px-5 md:px-10 xl:px-0 py-[90px] md:pt-[93px] md:pb-[170px] flex flex-col items-center">
				<AppCarousel
					classNames="max-w-[350px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[1063px]"
					autoplay={false}
					showArrows={true}
				>
					<div className="flex mt-4">
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

const MenuItem = ({ imageSrc, title, price, description }: MenuItemProps) => (
	<div className="min-w-0 flex-[0_0_100%] group relative">
		<div className="w-[350px] h-[250px] md:w-[700px] xl:w-[1063px] rounded-xl md:h-[446px] xl:h-[700px] relative">
			<Image src={imageSrc} alt={title} fill className="object-contain" />
		</div>
		<section className="hidden lg:block lg:absolute bottom-0 w-full lg:translate-y-full lg:group-hover:translate-y-0 transition-transform duration-300">
			<div className="bg-[#131313]/20 backdrop-blur-2xl rounded-br-xl rounded-bl-xl flex flex-col gap-6 w-full p-6">
				<div className="flex flex-col gap-2">
					<h2 className="text-white md:text-2xl font-semibold font-dms-serif">
						{title}
					</h2>
					<span className="font-semibold text-primary-light">{price}</span>
					<p className="text-grey-100 text-sm">{description}</p>
				</div>
				<Link
					href={
						"https://wa.me/13067150398?text=Hello! I would like to place an order."
					}
					className="bg-primary w-fit text-white px-4 py-2 rounded-lg"
				>
					Order Now
				</Link>
			</div>
		</section>

		<div className="lg:hidden flex flex-col gap-2 w-full md:p-2">
			<div className="flex flex-col gap-1">
				<h2 className="text-xl font-semibold font-dms-serif">{title}</h2>
				<span className="font-semibold text-primary">{price}</span>
				<p className="text-sm">{description}</p>
			</div>
			<Link
				href={
					"https://wa.me/13067150398?text=Hello! I would like to place an order."
				}
				target="_blank"
				rel="noopener noreferrer"
				className="bg-primary w-fit text-white px-4 py-2 rounded-lg"
			>
				Order Now
			</Link>
		</div>
	</div>
);
