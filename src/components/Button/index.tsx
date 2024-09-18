import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

function Button({
  children,
  url,
  className,
  scaleTap,
  scaleHover,
}: {
  children: React.ReactNode;
  url: string;
  className?: string;
  scaleTap?: number;
  scaleHover?: number;
}) {
  return (
    <Link href={url}>
      <motion.button
        whileTap={{ scale: scaleTap }}
        whileHover={{ scale: scaleHover }}
        className={twMerge('inline-flex items-center gap-2 border', className)}
      >
        {children}
      </motion.button>
    </Link>
  );
}

export default Button;
