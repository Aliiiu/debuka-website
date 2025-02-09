import { JSX, SVGProps } from "react";

export const Close = (
	props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>,
) => {
	return (
		<svg
			width="30"
			height="30"
			viewBox="0 0 30 30"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M22.5 7.5L7.5 22.5M7.5 7.5L22.5 22.5"
				stroke="white"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
