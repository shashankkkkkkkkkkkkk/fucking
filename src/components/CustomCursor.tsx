import React, { useEffect, useRef, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';

export const CustomCursor = () => {
  const [cursorState, setCursorState] = useState<'default' | 'hover' | 'cta' | 'card'>('default');
  const [cursorText, setCursorText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 250 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable = target.closest('button, a, .cursor-pointer');
      const isCTA = target.closest('.cta-button');
      const isCard = target.closest('.card-hover');

      if (isCTA) {
        setCursorState('cta');
      } else if (isCard) {
        setCursorState('card');
        setCursorText(target.closest('.card-hover')?.getAttribute('data-cursor-text') || 'View');
      } else if (isClickable) {
        setCursorState('hover');
      } else {
        setCursorState('default');
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (typeof window !== 'undefined' && 'ontouchstart' in window) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] flex items-center justify-center"
        animate={{
          width: cursorState === 'hover' ? 40 : cursorState === 'cta' ? 60 : cursorState === 'card' ? 80 : 24,
          height: cursorState === 'hover' ? 40 : cursorState === 'cta' ? 60 : cursorState === 'card' ? 80 : 24,
          backgroundColor: cursorState === 'cta' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
          border: cursorState === 'cta' ? 'none' : '1px solid rgba(255, 255, 255, 0.3)',
          backdropFilter: cursorState === 'cta' ? 'blur(4px)' : 'none',
        }}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-50%',
          translateY: '-50%',
          borderRadius: '50%',
        }}
      >
        {cursorState === 'card' && (
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-[10px] font-bold uppercase tracking-widest text-white"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </>
  );
};
