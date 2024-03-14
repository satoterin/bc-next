"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const MotionWrapper = ({ children }: Props) => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{
        y: 0,
        opacity: 1,
        transition: { delay: 0.4, duration: 0.7 },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
};

export default MotionWrapper;
