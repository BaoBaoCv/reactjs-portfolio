import React from "react";

import "./description-card.scss";
const DescriptionCard = ({
    className,
    description,
    descriptionColor,
    isFlexHorizontal,
    title,
    width,
    height,
}) => {
    return (
        <div
            style={{
                width: `${width}px`,
                height: `${height}px`,
                flexDirection: `${isFlexHorizontal ? "row" : "column"}`,
            }}
            className={`description-card ${className}`}
        >
            <div
                className="description-card__title"
                style={{ marginRight: "50px" }}
            >
                {title}
            </div>
            <div
                className="description-card__description"
                style={{ marginTop: "0px", color: descriptionColor }}
            >
                {description}
            </div>
        </div>
    );
};

export default DescriptionCard;
