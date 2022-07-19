import {
  chakra,
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
} from "@chakra-ui/react";
import { Link } from "@remix-run/react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const bg = useColorModeValue("bg.light", "bg.dark");
  const mobileNav = useDisclosure();
  return (
    <chakra.header bg={bg} w="full" px={{ base: 2, sm: 4 }} py={5}>
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Text fontSize="xl">pheralb</Text>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            display={{ base: "none", md: "inline-flex" }}
          >
            <Link to="/blog">
              <Button variant="ghost">Blog</Button>
            </Link>
          </HStack>
          <Box display={{ base: "inline-flex", md: "none" }}>
            <IconButton
              display={{ base: "flex", md: "none" }}
              aria-label="Open menu"
              fontSize="20px"
              color="gray.800"
              _dark={{ color: "inherit" }}
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
    </chakra.header>
  );
};

export default Header;
