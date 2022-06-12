import React from "react";
import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
};

const Tap = ({ children }: Props) => {
  return (
    <motion.div whileTap={{ scale: 0.96 }}>
      {children}
    </motion.div>
  );
};

export default Tap;
