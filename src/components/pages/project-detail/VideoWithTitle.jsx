import React from "react";
import ReactPlayer from 'react-player'
import "./project-detail.scss";

const VideoWithTitle = ({
    description,
    src,
    ...other
}) => {
    return (
        <div className="project-detail__images project-detail__row">
            <div className="project-detail__images-box">
                <ReactPlayer url={src} />
                <p>{description}</p>
            </div>
        </div>
    );
};

export default VideoWithTitle;
