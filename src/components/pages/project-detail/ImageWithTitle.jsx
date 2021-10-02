import React from "react";

import "./project-detail.scss";

const ImageWithTitle = ({
    description1,
    description2,
    src1,
    src2,
}) => {
    return (
        <div className="project-detail__images project-detail__row">
            <div className="project-detail__images-box">
                <img src={src1} />
                <p>{description1}</p>
            </div>
            {src2 && (
                <div className="project-detail__images-box">
                    <img src={src2} />
                    <p>{description2}</p>
                </div>
            )}
        </div>
    );
};

export default ImageWithTitle;
