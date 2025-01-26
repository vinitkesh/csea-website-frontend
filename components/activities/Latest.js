import { useEffect, useRef, useState } from 'react';
import styles from './Latest.module.css';

let isDragging = false;
let prevX = 0;

export default function Latest({ className, spacerClassName, children, passRef }) {
  const slider = useRef();
  const latest = useRef();
  const [width, setWidth] = useState(50);
  const [leftShift, setLeftShift] = useState(0);

  function getWidthPercentage() {
    if (latest.current) {
      let p = (window.innerWidth / latest.current.clientWidth) * 100;
      return p >= 100 ? 100 : p;
    }
    return 50;
  }

  const calculateScrollMetrics = () => {
    if (slider.current) {
      if(width>=90 ) return 10;
      const { scrollLeft, scrollWidth, clientWidth } = slider.current;
      const maxScrollLeft = scrollWidth - clientWidth;

      // Update `leftShift` as a percentage of the scroll width
      const shift = (scrollLeft / maxScrollLeft) * (100-width) ;
      if(shift>(100-width)) return 100-width;
      setLeftShift(shift);
    }
  };

  useEffect(() => {
    setWidth(getWidthPercentage());
    calculateScrollMetrics();

    const handleResize = () => {
      setWidth(getWidthPercentage());
    };

    // Mouse events
    const handleMouseDown = (e) => {
      isDragging = true;
      prevX = e.pageX;
    };

    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const x = e.pageX - prevX;
      slider.current.scrollLeft -= x;
      prevX = e.pageX;
      calculateScrollMetrics(); // Update `leftShift` during drag
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Touch events
    const handleTouchStart = (e) => {
      isDragging = true;
      prevX = e.touches[0].pageX;
    };

    const handleTouchMove = (e) => {
      if (!isDragging) return;
      const x = e.touches[0].pageX - prevX;
      slider.current.scrollLeft -= x;
      prevX = e.touches[0].pageX;
      calculateScrollMetrics(); // Update `leftShift` during touch drag
    };

    const handleTouchEnd = () => {
      isDragging = false;
    };

    const handleScroll = (e) => {
      if (e.deltaX !== 0) {
        e.preventDefault();
        slider.current.scrollLeft += e.deltaX;
      }
      calculateScrollMetrics(); // Update `leftShift` during wheel scroll
    };

    // Attach event listeners
    window.addEventListener('resize', handleResize);
    slider?.current?.addEventListener('wheel', handleScroll);
    slider?.current?.addEventListener('mousedown', handleMouseDown);
    slider?.current?.addEventListener('touchstart', handleTouchStart);
    window?.addEventListener('mousemove', handleMouseMove);
    window?.addEventListener('mouseup', handleMouseUp);
    window?.addEventListener('touchmove', handleTouchMove);
    window?.addEventListener('touchend', handleTouchEnd);

    slider.current?.addEventListener('scroll', calculateScrollMetrics);

    // Cleanup listeners on unmount
    return () => {
      slider.current?.removeEventListener('scroll', calculateScrollMetrics);
      window.removeEventListener('resize', handleResize);
      slider?.current?.removeEventListener('wheel', handleScroll);
      slider?.current?.removeEventListener('mousedown', handleMouseDown);
      slider?.current?.removeEventListener('touchstart', handleTouchStart);
      window?.removeEventListener('mousemove', handleMouseMove);
      window?.removeEventListener('mouseup', handleMouseUp);
      window?.removeEventListener('touchmove', handleTouchMove);
      window?.removeEventListener('touchend', handleTouchEnd);
    };
  }, []);

  return (
    <div className='flex flex-col justify-end items-end gap-4'>
      {/* Progress bar */}
      <div className={`bar w-[30%] h-4 border-[var(--border-color)] border p-1 relative mx-4`}>
        <div
          className=" completed absolute bg-[var(--primary)] h-2 top-1"
          style={{
            width: `calc(${width}% - 10px)`,
            left: `calc(${leftShift}% + 4px)`, // Dynamically update the position
          }}
        ></div>
      </div>

      {/* Scrollable content */}
      <div className={`${styles['slider']} ${className}`} ref={slider}>
        <div className="min-w-full w-max grid grid-cols-3 grid-flow-row" ref={latest}>
          {children}
        </div>
      </div>
    </div>
  );
}
