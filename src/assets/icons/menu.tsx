import { JSX, SVGProps } from "react";

const Menu = (props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) => {
	return (
		<svg
			width="26"
			height="18"
			viewBox="0 0 26 18"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M1.75 9.05479H24.25M1.75 1.55479H24.25M1.75 16.5548H16.75"
				stroke="#C6FFD7"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

export default Menu;
