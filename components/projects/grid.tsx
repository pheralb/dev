import { SimpleGrid } from "@chakra-ui/react";
import React from "react";

type Props = {
  children?: React.ReactNode;
};

const ProjectsGrid = ({ children }: Props) => {
  return (
    <SimpleGrid columns={4} spacing={10}>
      {children}
    </SimpleGrid>
  );
};

export default ProjectsGrid;
