import ProjectCard from "../Components/ProjectCard";

const Project = () => {
  const projectSecondNature = [
    { title: "Second Nature nol", url: "https://secondnature.vercel.app/" },
    { title: "Second Nature", url: "https://secondnature.vercel.app/" },
  ];
  return (
    <div className="wrapper project height-general">
    {projectSecondNature.map((project, index) => (
      <ProjectCard key={index} data={project} />
    ))}
  </div>
  );
};

export default Project;
