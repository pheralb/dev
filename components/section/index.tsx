import { Box, Text } from "@chakra-ui/react";
import React from "react";

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const Index = ({ title, children }: Props) => {
  return (
    <Box mb="8">
      <Text fontSize="3xl" mb="3">
        {title}
      </Text>
      {children}
    </Box>
  );
};

export default Index;
