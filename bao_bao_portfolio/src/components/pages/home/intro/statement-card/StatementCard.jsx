import React from 'react'
import DescriptionCard from "@/components/commons/description-card/DescriptionCard";
import { CHARACTER_IMAGES, getRndInteger } from "@/constants";
import { Image } from 'react-bootstrap';
import { motion } from "framer-motion";

function Statementcard({ ...otherProps }) {
    return (
        <div style={{ border: '2px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
            <DescriptionCard
                {...otherProps}
            />
            <motion.img
                src={
                    CHARACTER_IMAGES[
                    getRndInteger(
                        0,
                        CHARACTER_IMAGES.length - 1
                    )
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
                    delay: 3.2
                }}
                style={{ alignSelf: 'center', position: 'absolute', bottom: '-12px' }}
            />
        </div>
    )
}

export default Statementcard
