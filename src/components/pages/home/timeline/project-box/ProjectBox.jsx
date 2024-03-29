import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

import ProjectCard from "./project-card/ProjectCard";
import decorIcon from "@/assets/images/project-link-icon.png";
import { getMonthStr } from "@/constants";

import "./project-box.scss";

const variants = {
    rotate: { rotate: [0, -30, 0], transition: { duration: 0.5 } },
    none: {},
};

const ProjectBox = ({ index, isHovered, setIsHovered, project, src }) => {
    let location = useLocation();
    console.log(project)
    return (
        <div className="project-box">
            <ProjectCard
                index={index}
                setIsHovered={setIsHovered}
                project={project}
                src={src}
            />
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
                    key={project.id}
                    className={"project-box__bottom-link"}
                    to={project.useModal ? {
                        pathname: `/modal/${project.id}`,
                        state: { background: location }
                    } : {
                        pathname: `/projectDetail/${project.id}`
                    }}
                >
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        variants={variants}
                        animate={isHovered[index] ? "rotate" : "none"}
                        className="project-box__bottom-icon"
                        src={decorIcon}
                    />
                </Link>
            </div>
        </div>
    );
};

export default ProjectBox;