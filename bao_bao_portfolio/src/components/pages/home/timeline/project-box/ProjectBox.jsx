import React from "react";
import { Link } from "react-router-dom";
import { Image } from "react-bootstrap";
import { motion } from "framer-motion";

import ProjectCard from "./project-card/ProjectCard";
import decorIcon from "@/assets/images/project-link-icon.png";
import { getMonthStr } from "@/constants";

import "./project-box.scss";

const variants = {
    rotate: { rotate: [0, -30, 0], transition: { duration: 0.5 } },
    none: {},
};

const ProjectBox = ({ index, isHovered, setIsHovered, project }) => {
    return (
        <div className="project-box">
            <ProjectCard
                index={index}
                setIsHovered={setIsHovered}
                project={project}
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
                    className={"project-box__bottom-link"}
                    to={{
                        pathname: "/projectDetail",
                        state: {
                            project: project,
                        },
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
