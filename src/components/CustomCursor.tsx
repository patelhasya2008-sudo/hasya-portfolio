import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clickActive, setClickActive] = useState(false);

  // Use motion values for ultra-smooth rendering
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Use spring configurations for fluid elastic lag (trailing effect)
  const springConfig = { damping: 30, stiffness: 350, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Avoid running on mobile and touch devices
    if (typeof window === 'undefined') return;
    const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouch) return;

    setVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setClickActive(true);
    const handleMouseUp = () => setClickActive(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('button') !== null || 
        target.closest('a') !== null ||
        target.getAttribute('role') === 'button' ||
        target.classList.contains('interactive-cursor');
        
      setHovered(isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <>
      {/* Tiny precision inner dot */}
      <motion.div
        id="cursor-dot"
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[#0A84FF] pointer-events-none z-55 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      
      {/* Smooth outer trailing circle ring */}
      <motion.div
        id="cursor-ring"
        className="fixed top-0 left-0 pointer-events-none z-55 rounded-full border border-[#0A84FF]/40 pointer-events-none mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: hoverActiveStyle(hovered, clickActive).width,
          height: hoverActiveStyle(hovered, clickActive).height,
          backgroundColor: hoverActiveStyle(hovered, clickActive).backgroundColor,
          borderColor: hoverActiveStyle(hovered, clickActive).borderColor,
        }}
        transition={{ type: 'spring', stiffness: 450, damping: 25 }}
      />
    </>
  );
}

function hoverActiveStyle(hovered: boolean, clickActive: boolean) {
  if (clickActive) {
    return {
      width: '18px',
      height: '18px',
      backgroundColor: 'rgba(10, 132, 255, 0.4)',
      borderColor: '#30D158',
    };
  }
  if (hovered) {
    return {
      width: '46px',
      height: '46px',
      backgroundColor: 'rgba(10, 132, 255, 0.08)',
      borderColor: '#30D158',
    };
  }
  return {
    width: '32px',
    height: '32px',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    borderColor: 'rgba(10, 132, 255, 0.35)',
  };
}
