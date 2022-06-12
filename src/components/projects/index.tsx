import React from "react";
import ProjectsData from "@/data/projects";
import { CardLg } from "@/common";
import ProjectsGrid from "@/components/projects/grid";

const Index = () => {
  return (
    <>
      <ProjectsGrid>
        {ProjectsData.map((project) => (
          <CardLg
            key={project.title}
            title={project.title}
            image={project.image}
            url={project.url}
            external={project.external}
          />
        ))}
      </ProjectsGrid>
    </>
  );
};

export default Index;
