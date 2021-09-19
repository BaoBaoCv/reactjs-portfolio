import React from "react";
import { motion } from "framer-motion"


import "./description-card.scss";
const DescriptionCard = ({
    className,
    description,
    descriptionColor,
    backgroundColor,
    isFlexHorizontal,
    title,
    width,
    borderColor
}) => {
    return (
        <motion.div
            style={{
                width: `${typeof width === 'string' ? width : width + 'px'}`,
                flexDirection: `${isFlexHorizontal ? "row" : "column"}`,
                overflow: 'hidden',
                backgroundColor,
                borderColor
            }}
            className={`description-card ${className ? className : ''}`}
            whileHover={{
                scale: 1.1
            }}
            whileTap={{
                scale: 0.9
            }}
            drag
            dragConstraints={{
                right: 10,
                top: 10,
                bottom: 10
            }}
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
        </motion.div>
    );
};

export default DescriptionCard;
