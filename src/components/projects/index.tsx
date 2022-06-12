import React from "react";
import ProjectsData from "src/data/projects";
import Card from "src/components/cards/large";
import ProjectsGrid from "src/components/projects/grid";

const Index = () => {
  return (
    <>
      <ProjectsGrid>
        {ProjectsData.map((project) => (
          <Card
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
