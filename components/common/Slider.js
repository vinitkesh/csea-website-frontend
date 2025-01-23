import { useState, useEffect, useRef } from 'react';

import styles from './Slider.module.css';

let isDragging = false;
let prevX = 0;

export default function Slider({ className, spacerClassName, children }) {
	const slider = useRef();

	useEffect(() => {
		if (!slider.current) return;

		const handleMouseDown = (e) => {
			isDragging = true;
			prevX = e.pageX;
		};

		const handleMouseMove = (e) => {
			if (!isDragging) return;
			const x = e.pageX - prevX;
			slider.current.scrollLeft -= x;
			prevX = e.pageX;
		};

		const handleMouseUp = () => {
			isDragging = false;
		};

		const handleTouchStart = (e) => {
			isDragging = true;
			prevX = e.touches[0].pageX;
		};

		const handleTouchMove = (e) => {
			if (!isDragging) return;
			const x = e.touches[0].pageX - prevX;
			slider.current.scrollLeft -= x;
			prevX = e.touches[0].pageX;
		};

		const handleTouchEnd = () => {
			isDragging = false;
		};

		const handleScroll = (e) => {
			if (e.deltaX !== 0) {
				e.preventDefault();
				slider.current.scrollLeft += e.deltaX;
			}
		};

		slider?.current?.addEventListener('wheel', handleScroll);
		slider?.current?.addEventListener('mousedown', handleMouseDown);
		slider?.current?.addEventListener('touchstart', handleTouchStart);
		window.addEventListener('mousemove', handleMouseMove);
		window.addEventListener('mouseup', handleMouseUp);
		window.addEventListener('touchmove', handleTouchMove);
		window.addEventListener('touchend', handleTouchEnd);

		return () => {
			slider?.current?.removeEventListener('wheel', handleScroll);
			slider?.current?.removeEventListener('mousedown', handleMouseDown);
			slider?.current?.removeEventListener('touchstart', handleTouchStart);
			window.removeEventListener('mousemove', handleMouseMove);
			window.removeEventListener('mouseup', handleMouseUp);
			window.removeEventListener('touchmove', handleTouchMove);
			window.removeEventListener('touchend', handleTouchEnd);
		};
	}, [slider]);

	return (
		<div className={`${styles['slider']} ${className}`} ref={slider}>
			<div className={styles['content']}>
				<div style={{ flexShrink: 0 }} className={spacerClassName}></div>
				{children}
				<div style={{ flexShrink: 0 }} className={spacerClassName}></div>
			</div>
		</div>
	);
}
