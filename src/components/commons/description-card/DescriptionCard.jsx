import React from "react";
import { motion } from "framer-motion";

import "./description-card.scss";
const DescriptionCard = ({
    className,
    description,
    descriptionColor,
    isFlexHorizontal,
    title,
    width,
}) => {
    return (
        <div
            className={`${className} description-card ${
                isFlexHorizontal ? "column" : ""
            }`}
            style={{
                overflow: "hidden",
                width: width,
            }}
        >
            <div
                className={`description-card__title ${
                    isFlexHorizontal ? "column" : ""
                }`}
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
