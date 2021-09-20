import React from "react";
import { motion } from "framer-motion";

import "./description-card.scss";
const DescriptionCard = ({
    className,
    description,
    descriptionColor,
    backgroundColor,
    isFlexHorizontal,
    title,
    width,
    borderColor,
}) => {
    return (
        <div
            style={{
                width: `${typeof width === "string" ? width : width + "px"}`,
                flexDirection: `${isFlexHorizontal ? "row" : "column"}`,
                overflow: "hidden",
                backgroundColor,
                borderColor,
            }}
            className={`description-card ${className ? className : ""}`}
        >
            {title && (
                <div
                    className="description-card__title"
                    style={{ marginRight: "50px" }}
                >
                    {title}
                </div>
            )}
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
