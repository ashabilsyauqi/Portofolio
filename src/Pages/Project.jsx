import ProjectCard from "../Components/ProjectCard";

const Project = () => {
  const projectSecondNature = [
    { title: "Second Nature nol", url: "https://secondnature.vercel.app/" },
    {
      title: "Digital Services",
      url: "https://digital-services-pi.vercel.app/",
    },
    { title: "Tilt Component", url: "./sandbox" },
    { title: "Movie Seach", url: "https://movies-search-sand.vercel.app/" },
    { title: "Weather App", url: "https://weather-self-mu.vercel.app/" },
    { title: "Applikasi Kasir", url: "http://localhost/aplikasi_kasir/kasir/riwayat_transaksi.php" },
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
