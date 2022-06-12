import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useColorMode, useColorModeValue } from "@chakra-ui/react";
import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";
import IconBtns from "@/components/buttons/iconBtns";

type Props = {};

const DarkMode = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const key = useColorModeValue("Dark", "Light");
  const icon = useColorModeValue(
    <IoMoonOutline size="22" />,
    <IoSunnyOutline size="22" />
  );
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
        <IconBtns
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
