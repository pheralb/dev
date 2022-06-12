import React from "react";
import { Badge, Box, Text, Heading, useColorModeValue } from "@chakra-ui/react";
import { CustomLink } from "@/common";
import { Card } from "@/interfaces/card";

const CardMini = ({ title, description, tags, url }: Card) => {
  const descriptionColor = useColorModeValue("gray.600", "gray.400");
  return (
    <CustomLink href={url}>
      <Box borderWidth="1px" borderRadius="5px" mb="3" p="4">
        <Heading mb="1" mt="1" fontSize="20px">
          {title}
        </Heading>
        <Text fontSize="13px" mb="2" color={descriptionColor}>
          {description}
        </Text>
        {tags?.map((tag) => (
          <Badge
            key={tag}
            bg="transparent"
            fontWeight="light"
            borderWidth="1px"
            textTransform="lowercase"
            mr="0"
            ml="1"
          >
            #{tag}
          </Badge>
        ))}
      </Box>
    </CustomLink>
  );
};

export default CardMini;
