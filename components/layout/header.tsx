import React from "react";
import {
  Box,
  Flex,
  useColorModeValue,
  HStack,
  Button,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
  Text,
  Link,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { MagnifyingGlass } from "phosphor-react";
import { IoMenu, IoSearchOutline } from "react-icons/io5";
import NextLink from "next/link";
import DarkMode from "components/layout/darkMode";
import IconBtns from "components/buttons/iconBtns";
import HeaderLinks from "components/layout/links";
import Command from "components/command";
import { AnimatePresence, motion } from "framer-motion";
import Tap from "animations/tap";

const Header = () => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  const betaColor = useColorModeValue("gray.600", "gray.500");
  const mobileNav = useDisclosure();

  return (
    <Box bg={bg} backdropBlur="md" w="full" pos="sticky" pr="8" pl="8" py="5" top="0">
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Tap>
          <NextLink href={"/"} passHref>
            <Link
              _hover={{ border: 0, textDecoration: "none" }}
              _focus={{ border: 0 }}
            >
              <HStack spacing={0}>
                <Text fontSize="17px" fontFamily="Inter-Semibold">
                  pheralb
                </Text>
              </HStack>
            </Link>
          </NextLink>
        </Tap>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack spacing={3} display={{ base: "none", md: "inline-flex" }}>
            {HeaderLinks.map((link, i) => (
              <NextLink key={link.id} href={link.href} passHref>
                <Link isExternal={link.external}>
                  <IconBtns title={link.title} icon={link.icon} />
                </Link>
              </NextLink>
            ))}
            <Command />
            <DarkMode />
          </HStack>
          <Box display={{ base: "inline-flex", md: "none" }}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              variant="ghost"
              icon={<IoMenu size="22" />}
              borderWidth="1px"
              onClick={mobileNav.onOpen}
            />
            <AnimatePresence exitBeforeEnter initial={false}>
              {mobileNav.isOpen && (
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <VStack
                    pos="fixed"
                    top={0}
                    left={0}
                    right={0}
                    display={mobileNav.isOpen ? "flex" : "none"}
                    p={2}
                    bg={bg}
                    spacing={3}
                    rounded="sm"
                    shadow="sm"
                    borderWidth="1px"
                  >
                    <CloseButton
                      aria-label="Close menu"
                      onClick={mobileNav.onClose}
                    />
                    {HeaderLinks.map((link, i) => (
                      <NextLink key={link.id} href={link.href} passHref>
                        <Link isExternal={link.external}>
                          <IconBtns title={link.title} icon={link.icon} />
                        </Link>
                      </NextLink>
                    ))}
                  </VStack>
                </motion.div>
              )}
            </AnimatePresence>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
