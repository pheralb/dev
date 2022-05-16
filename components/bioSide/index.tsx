import { Box, Flex, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Index = ({ children }: Props) => {
  const borderColor = useColorModeValue("border.light", "border.dark");

  // Side content ->
  const SideContent = (props: any) => (
    <Box
      as="nav"
      pos="fixed"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      borderWidth="1px"
      borderRadius="10px"
      borderColor={borderColor}
      w="445px"
      {...props}
    >
      <Flex direction="column" py="10">
        <Text fontFamily="Inter-Semibold" fontSize="5xl" textAlign="center">
          Pablo Hernández
        </Text>
        <Box pr="40px" pl="40px" pt="1">
          <Text>Web developer.</Text>
        </Box>
      </Flex>
    </Box>
  );

  return (
    <Box as="section">
      <SideContent display={{ base: "none", md: "unset" }} />
      <Box ml={{ base: 0, md: "480px" }} transition=".3s ease">
        <Box as="main">{children}</Box>
      </Box>
    </Box>
  );
};

export default Index;
