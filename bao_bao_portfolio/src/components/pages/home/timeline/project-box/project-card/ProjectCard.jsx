import React from "react";
import ProjectCategoryTag from "@/components/commons/project-category-tag/ProjectCategoryTag";
import { motion } from "framer-motion";
import "./project-card.scss";
const ProjectCard = ({ index, setIsHovered, project }) => {
    return (
        <motion.div
            className="project-card"
            onHoverStart={() => {
                setIsHovered((pre) => {
                    pre[index] = true;
                    return [...pre];
                });
            }}
            onHoverEnd={() => {
                setIsHovered((pre) => {
                    pre[index] = false;
                    return [...pre];
                });
            }}
            whileHover={{
                scale: 1.05,
            }}
            drag
            dragConstraints={{
                right: 3,
                top: 3,
                left: 3,
                bottom: 3,
            }}
        >
            <div className="project-card__tags">
                {project.tags.map((tag) => (
                    <ProjectCategoryTag key={tag} data={tag} />
                ))}
            </div>
            <div className="project-card__img"></div>
            <div className="project-card__name-card">
                <div className="project-card__name-card-name">NAME</div>
                <div className="project-card__name-card-detail">
                    {project.name}
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
