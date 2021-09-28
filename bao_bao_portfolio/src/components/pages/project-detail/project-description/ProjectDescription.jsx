import React from "react";
import "./project-description.scss";
const ProjectDescription = ({ className, title, col1, col2, isTwoCols }) => {
    let paraClassName;
    if (!isTwoCols) {
        paraClassName = "one-col";
    } else {
        paraClassName = "two-col";
    }
    return (
        <div className={`project-description ${className}`}>
            <div className="project-description__title-container">
                <div className="project-description__title project-description__item">
                    {title}
                </div>
            </div>
            <p
                className={`project-description__para project-description__item ${paraClassName}`}
            >
                {col1}
            </p>
            {isTwoCols ? (
                <p
                    className={`project-description__para project-description__item ${paraClassName}`}
                >
                    {col2}
                </p>
            ) : (
                ""
            )}
        </div>
    );
};

export default ProjectDescription;
