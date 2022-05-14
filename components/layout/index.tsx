import React from "react";
import Header from "components/layout/header";

type Props = {
  children: React.ReactNode;
};

const Index = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default Index;
