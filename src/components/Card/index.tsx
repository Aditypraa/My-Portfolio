'use client';
import React, { ComponentPropsWithoutRef } from 'react';
import grainImage from '@/assets/images/grain.jpg';
import { twMerge } from 'tailwind-merge';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

function Card({
  className,
  children,
  ...other
}: ComponentPropsWithoutRef<any>) {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
    }
  }, [control, inView]);

  return (
    <motion.div
      className={twMerge(
        "bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none",
        className
      )}
      ref={ref}
      animate={control}
      {...other}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{ backgroundImage: `url(${grainImage.src})` }}
      ></div>
      {children}
    </motion.div>
  );
}

export default Card;
