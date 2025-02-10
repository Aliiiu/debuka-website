export default function ArrowDownIcon({
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
			<title>Arrow Down Icon</title>
			<path
				d="M10.5 3.625V17.375"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M4.875 11.75L10.5 17.375L16.125 11.75"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
