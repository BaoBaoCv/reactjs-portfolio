import React, { useState } from "react";
import { CHARACTER_IMAGES, getRndInteger } from "@/constants";
import { motion } from "framer-motion";

import "./statement-card.scss";
const StatementCard = ({ className, description }) => {
    const [character, setCharacter] = useState(
        CHARACTER_IMAGES[getRndInteger(0, CHARACTER_IMAGES.length - 1)]
    );
    return (
        <div className={`${className} statement-card`}>
            <div className="statement-card__card">{description}</div>
            <motion.img
                className="statement-card__character"
                src={character}
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

export default StatementCard;
