import React from "react";
import DescriptionCard from "@/components/commons/description-card/DescriptionCard";
import { CHARACTER_IMAGES, getRndInteger } from "@/constants";
import { Image } from "react-bootstrap";
import { motion } from "framer-motion";

import "./statement-card.scss";
const Statementcard = ({ ...otherProps }) => {
    return (
        <div
            className="statement-card"
            style={{
                border: "2px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
            }}
        >
            <DescriptionCard {...otherProps} />
            <motion.img
                className="statement-card__character"
                src={
                    CHARACTER_IMAGES[
                        getRndInteger(0, CHARACTER_IMAGES.length - 1)
                    ]
                }
                initial={{
                    y: -1000,
                }}
                animate={{
                    y: 0,
                }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    delay: 3.2,
                }}
            />
        </div>
    );
};

export default Statementcard;
