import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const AnimatedCursor: React.FC = () => {
	const cursorRef = useRef<HTMLDivElement>(null);
	const lightRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const tl = gsap.timeline({ paused: true });

		if (cursorRef.current && lightRef.current) {
			// Initial scale down and opacity to 0 for the light effect
			gsap.set(lightRef.current, {
				scale: 0.1,
				opacity: 0,
			});

			tl.to(lightRef.current, {
				scale: 0.5,
				opacity: 1,
				duration: 0.5,
				ease: 'power2.out',
			})
				.to(lightRef.current, {
					scale: 1,
					opacity: 0,
					duration: 0.4,
					ease: 'power2.inOut',
				})
				.to(
					cursorRef.current,
					{
						opacity: 0,
						duration: 0.4,
						ease: 'power2.inOut',
					},
					'<'
				);
		}

		const moveCursor = (e: MouseEvent) => {
			const { clientX, clientY } = e;
			if (cursorRef.current) {
				gsap.to(cursorRef.current, {
					x: clientX,
					y: clientY,
					ease: 'power3.out',
				});
			}
			tl.restart(true);
		};

		window.addEventListener('mousemove', moveCursor);

		return () => {
			window.removeEventListener('mousemove', moveCursor);
		};
	}, []);

	const cursorStyle: React.CSSProperties = {
		position: 'fixed',
		top: 0,
		left: 0,
		width: '200px',
		height: '200px',
		borderRadius: '50%',
		background: 'radial-gradient(at center, #c6ffd7, #cef7da, #a2bba9)',
		transform: 'translate(-50%, -50%)',
		pointerEvents: 'none',
		zIndex: 9999,
		opacity: 0.1,
		boxShadow: '0 0 50px #c6ffd7, 0 0 100px #c6ffd7', // Glowing effect
	};

	const lightStyle: React.CSSProperties = {
		position: 'absolute',
		width: '100%',
		height: '100%',
		borderRadius: '50%',
		background: 'radial-gradient(at center, #FFFFFF, transparent)',
		opacity: 0,
		transform: 'scale(0)',
	};

	return (
		<div ref={cursorRef} style={cursorStyle}>
			<span ref={lightRef} style={lightStyle} />
		</div>
	);
};

export default AnimatedCursor;
