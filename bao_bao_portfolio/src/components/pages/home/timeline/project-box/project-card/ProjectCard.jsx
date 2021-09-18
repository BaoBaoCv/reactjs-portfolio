import React from "react";
import "./project-card.scss";
const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <div className="project-card__tags">
                {project.tags.map((tag) => (
                    <div key={tag} className="project-card__tags-detail">
                        {tag}
                    </div>
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
