import React from "react";

import "./project-category-tag.scss";
const ProjectCategoryTag = ({ className, data }) => {
    return <div className={`project-category-tag ${className}`}>{data}</div>;
};

export default ProjectCategoryTag;
