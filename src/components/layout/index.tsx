import React from "react";
import Header from "@/components/layout/header";
import { Container } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const Index = (props: Props) => {
  return (
    <>
      <Header />
      <Container maxW="98%">
        {props.children}
      </Container>
    </>
  );
};

export default Index;
