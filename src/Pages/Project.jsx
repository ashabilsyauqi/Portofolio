import ProjectCard from "../Components/ProjectCard";

const Project = () => {
  const projectSecondNature = [
    { title: "Second Nature nol", url: "https://secondnature.vercel.app/" },
    { title: "Digital Services", url: "https://digital-services-pi.vercel.app/" },
    { title: "Tilt Component", url: "./sandbox" },
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
