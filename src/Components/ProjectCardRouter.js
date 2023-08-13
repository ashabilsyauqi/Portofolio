import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCardRouter({data}) {
  return (
    <Link to={data.url} className="title-project">
      <div className=" button-56 project-card">{data.title}</div>
    </Link>
  );
}
