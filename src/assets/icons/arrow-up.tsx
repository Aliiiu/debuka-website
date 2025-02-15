export default function ArrowUpIcon({
	className,
}: Readonly<{
	className?: string;
}>) {
	return (
		<svg
			width="21"
			height="21"
			viewBox="0 0 21 21"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={className}
		>
			<title>Arrow Up</title>
			<path
				d="M10.5 17.375V3.625"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M4.875 9.25L10.5 3.625L16.125 9.25"
				stroke="white"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</svg>
	);
}
