import React from "react";

import "./project-detail.scss";

const ImageWithTitle = ({
    className,
    description1,
    description2,
    numberOfImage,
    src1,
    src2,
}) => {
    return (
        <div className={className}>
            <div className="project-detail__images-box">
                <img src={src1} />
                <p>{description1}</p>
            </div>
            {numberOfImage == 2 ? (
                <div className="project-detail__images-box">
                    <img src={src2} />
                    <p>{description2}</p>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default ImageWithTitle;
