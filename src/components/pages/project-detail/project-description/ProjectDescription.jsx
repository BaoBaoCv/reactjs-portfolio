import React from "react";
import "./project-description.scss";
const ProjectDescription = ({ title, col1, col2 }) => {
    let isTwoCols;
    let paraClassName;
    if (col2 === undefined) {
        paraClassName = "one-col";
        isTwoCols = false;
    } else {
        paraClassName = "two-col";
        isTwoCols = true;
        console.log(col2)
    }
    return (
        <div className={`project-description project-detail__row`}>
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
