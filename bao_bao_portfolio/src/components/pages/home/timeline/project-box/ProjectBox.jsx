import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";

import ProjectCard from "./project-card/ProjectCard";
import decorIcon from "@/assets/images/project-link-icon.png";

import "./project-box.scss";

const getMonthStr = (date) => {
    return date.toLocaleString("default", { month: "long" });
};
const ProjectBox = ({ project }) => {
    return (
        <div className="project-box">
            <ProjectCard project={project} />
            <div className="project-box__bottom">
                <div className="project-box__bottom-detail">
                    <div className="project-box__bottom-description">
                        {`THIS PROJECT WAS MADE IN ${getMonthStr(
                            project.date
                        )}, ${project.date.getYear() + 1900}`}
                    </div>
                    <div className="project-box__bottom-role">
                        {`ROLE: ${project.role}`}
                    </div>
                    <div className="project-box__bottom-company">
                        {project.company}
                    </div>
                </div>
                <Link
                    className={"project-box__bottom-link"}
                    to={"/projectDetail"}
                >
                    <Image
                        className="project-box__bottom-icon"
                        src={decorIcon}
                    />
                </Link>
            </div>
        </div>
    );
};

export default ProjectBox;
