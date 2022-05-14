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
  Icon,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import HeaderLinks from "components/layout/links";
import { MagnifyingGlass } from "phosphor-react";
import Heart from "components/icons/heart";
import List from "library/list";

const Header = () => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  const betaColor = useColorModeValue("gray.600", "gray.500");
  const mobileNav = useDisclosure();

  return (
    <Box
      bg={bg}
      w="full"
      px={{ base: 2, sm: 5 }}
      py={4}
      pr={{ base: 2, sm: 7 }}
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <HStack spacing={3}>
          <Text fontSize="2xl" fontFamily="Inter-Semibold">
            animr
          </Text>
          <Text fontFamily="Virgil" fontSize="13px" color={betaColor}>
            beta
          </Text>
          <Heart width={20} height={25} />
        </HStack>

        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack spacing={5} display={{ base: "none", md: "inline-flex" }}>
            <MagnifyingGlass size={24} weight="bold" />
            {HeaderLinks.map((link, i) => (
              <Icon
                aria-label={link.title}
                key={link.title}
                as={link.icon}
                boxSize={7}
              />
            ))}
          </HStack>
          <Box display={{ base: "inline-flex", md: "none" }}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color={useColorModeValue("gray.800", "inherit")}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <CloseButton
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />

              <Button w="full" variant="ghost">
                Features
              </Button>
              <Button w="full" variant="ghost">
                Pricing
              </Button>
              <Button w="full" variant="ghost">
                Blog
              </Button>
              <Button w="full" variant="ghost">
                Company
              </Button>
              <Button w="full" variant="ghost">
                Sign in
              </Button>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Header;
