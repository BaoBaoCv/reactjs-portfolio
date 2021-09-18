import React from "react";
import ProjectCategoryTag from "@/components/commons/project-category-tag/ProjectCategoryTag";
import "./project-card.scss";
const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
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
        </div>
    );
};

export default ProjectCard;
