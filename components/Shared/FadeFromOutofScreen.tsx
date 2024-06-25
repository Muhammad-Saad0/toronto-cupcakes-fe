"use client"

// components/FadeFromOutofScreen.tsx

import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimationProps {
  direction?: 'left' | 'right';
  children: React.ReactNode;
}

const FadeFromOutofScreen: React.FC<ScrollAnimationProps> = ({ direction, children }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === 'left' ? -300 : 300,  // Further off-screen
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: 'easeInOut' },  // Increased duration and added easing
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="mb-8"
    >
      {children}
    </motion.div>
  );
};

export default FadeFromOutofScreen;
