import Link from "next/link";

export const faqData = [
	{
		title: "What is deBuka?",
		content:
			"deBuka is a dining company and not a restaurant. We believe that dining should not be restrictive.\n\nDining can be experienced anywhere there’s a group of people with a shared bond and connection. Our goal is to spread worth and elevate people with authentic Nigerian cuisines with influences from around the world. Although, we are working on opening a restaurant later in the year.",
	},
	{
		title: "Where is deBuka located?",
		content: "deBuka is located in Hannon, Hamilton, Ontario.",
	},
	{
		title: "Do you have a physical dine-in location?",
		content: "No, we currently focus on pre-order and delivery services only.",
	},
	{
		title: "How do I place an order?",
		content: (
			<span>
				Orders can be placed by clicking on this{" "}
				<Link
					href={
						"https://wa.me/13067150398?text=Hello! I would like to place an order."
					}
					target="_blank"
					rel="noopener noreferrer"
					className="underline font-medium"
				>
					link
				</Link>
			</span>
		),
	},
	{
		title: "What areas do you deliver to?",
		content:
			"We deliver to areas close to Hamilton including Waterdown, Binbrook, Stoney Creek, Ancaster, Oakville, Burlington, Paris, Dunnville, Grimsby, Caledonia among others.",
	},
	{
		title: "How much is the delivery fee?",
		content:
			"Delivery fee depends on the location. Location within Hamilton is capped at $10. Other locations will vary.",
	},
	{
		title: "When can I place an order?",
		content:
			"Orders can be placed anytime during the week from Monday – Thursday. We only do deliveries on weekends.",
	},
	{
		title: "Can I pick up my order instead of delivery?",
		content:
			"Yes, a pick-up option is available too. Pick-up location will be shared when an order is made.",
	},
	{
		title: "Do you use natural ingredients?",
		content:
			"Yes, all our ingredients are naturally sourced and we do not use any off-the-shelf spices. We make everything in our kitchen.",
	},
	{
		title: "What payment methods do you accept?",
		content:
			"For now, payment can be made via e-transfer. The email address to use will be shared when an order is made.",
	},
];
