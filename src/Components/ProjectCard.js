import React from "react";

export default function ProjectCard({data}) {
  return (
    <a href={data.url} className="title-project" target="_blank" rel="noreferrer">
      <div className=" button-56 project-card">{data.title}</div>
    </a>
  );
}
