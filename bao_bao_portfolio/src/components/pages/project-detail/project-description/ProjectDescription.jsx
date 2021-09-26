import React from "react";
import "./project-description.scss";
import AppText from "../AppText";
const ProjectDescription = ({ className, title, col1, col2, isMulti }) => {
    let multiStyle;
    if (!isMulti) {
        multiStyle = { width: 'auto' }
        console.log(multiStyle)
    } else {
        multiStyle = { width: '500px' }
    }
    return (
        <div className={`project-description ${className}`}>
            <div className="project-description__title-container">
                <div className="project-description__line" />
                <div className="project-description__title project-description__item">
                    {title}
                </div>
            </div>
            <AppText style={multiStyle}>
                {col1}
            </AppText>
            {isMulti ? <AppText style={multiStyle}>
                {col2}
            </AppText> : ''}
        </div>
    );
};

export default ProjectDescription;
