import React from 'react'
import "./project-description/project-description.scss";

function AppText({ children, ...other }) {
    const text = children;
    const newText = text.split('\n').map(str => <p>{str}</p>);
    console.log(newText)
    return (
        <div className="project-description__para project-description__item" {...other}>
            <p>{newText}</p>
        </div>
    )
}

export default AppText
