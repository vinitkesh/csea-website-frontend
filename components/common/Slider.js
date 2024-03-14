import { useState, useEffect, useRef } from 'react'

import styles from './Slider.module.css'

let isDragging, prevX

export default function Slider({ className, spacerClassName, children }) {
	const slider = useRef()

	useEffect(() => {
		if (!slider.current) return

		const handleMouseDown = (e) => {
			console.log('down')
			isDragging = true
			prevX = e.pageX
		}

		const handleMouseMove = (e) => {
			if (!isDragging) return
			const x = e.pageX - prevX
			slider.current.scrollLeft -= x
			prevX = e.pageX
		}

		const handleMouseUp = () => {
			isDragging = false
		}

		const handleScroll = (e) => {
			if (e.deltaX !== 0) {
				event.preventDefault()
				slider.current.scrollLeft += e.deltaX
			}
		}

		slider?.current?.addEventListener('wheel', handleScroll)
		slider?.current?.addEventListener('mousedown', handleMouseDown)
		window.addEventListener('mousemove', handleMouseMove)
		window.addEventListener('mouseup', handleMouseUp)

		return () => {
			slider?.current?.removeEventListener('mousedown', handleMouseDown)
			window.removeEventListener('mousemove', handleMouseMove)
			window.removeEventListener('mouseup', handleMouseUp)
		}
	}, [slider.current])

	return (
		<div className={`${styles['slider']} ${className}`} ref={slider}>
			<div className={styles['content']}>
				<div style={{ flexShrink: 0 }} className={spacerClassName}></div>
				{children}
				<div style={{ flexShrink: 0 }} className={spacerClassName}></div>
			</div>
		</div>
	)
}
