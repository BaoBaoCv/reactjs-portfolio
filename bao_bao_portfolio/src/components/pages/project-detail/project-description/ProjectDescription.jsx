import React from "react";
import "./project-description.scss";
const ProjectDescription = ({ className, title }) => {
    return (
        <div className={`project-description ${className}`}>
            <div className="project-description__line" />
            <div className="project-description__title project-description__item">
                {title}
            </div>
            <div className="project-description__para project-description__item">
                CURRENTLY, I AM A WEB DEVELOPER & PROGRAMER WHO LOVES DOING
                THINGS WITH FRESH MINDS. PREVIOUSLY, I WORKED AS PROGRAMMER AT
                APPLE, SAMSUNG & XIAOMI. NOW I AM FREELANCER AND HAPPY TO SEE
                YOU.
            </div>
            <div className="project-description__para project-description__item">
                CURRENTLY, I AM A WEB DEVELOPER & PROGRAMER WHO LOVES DOING
                THINGS WITH FRESH MINDS. PREVIOUSLY, I WORKED AS PROGRAMMER AT
                APPLE, SAMSUNG & XIAOMI. NOW I AM FREELANCER AND HAPPY TO SEE
                YOU.
            </div>
        </div>
    );
};

export default ProjectDescription;
