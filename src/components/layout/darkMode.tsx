import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { Sun, Moon } from "phosphor-react";
import { IconBtn } from "@/common";

const DarkMode = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  const key = useColorModeValue("Dark", "Light");
  const icon = useColorModeValue(<Moon size="22" />, <Sun size="22" />);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <motion.div
        style={{ display: "inline-block" }}
        key={useColorModeValue("light", "dark")}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <IconBtn
          title={`${key} theme`}
          aria-label="Toggle theme"
          icon={icon}
          onClick={toggleColorMode}
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default DarkMode;
