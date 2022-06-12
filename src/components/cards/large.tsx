import { Box, Image, Heading } from "@chakra-ui/react";
import CustomLink from "src/components/link";
import { Card } from "src/interfaces/card";
import React from "react";

const CardLarge = ({ title, image, url, external }: Card) => {
  return (
    <CustomLink href={url} external={external}>
      <Box borderWidth="1px" rounded="lg" shadow="lg">
        <Image src={image} alt={title} roundedTop="lg" />
        <Box p="6">
          <Heading mt="1" fontSize="18px" lineHeight="tight" isTruncated>
            {title}
          </Heading>
        </Box>
      </Box>
    </CustomLink>
  );
};

export default CardLarge;
