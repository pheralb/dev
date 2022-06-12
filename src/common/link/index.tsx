import React from "react";
import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
  external?: boolean;
};

const CustomLink = ({ children, href, external }: Props) => {
  return (
    <NextLink href={href} passHref>
      <Link
        _hover={{ border: 0, textDecoration: "none" }}
        _focus={{ border: 0 }}
        isExternal={external}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default CustomLink;
