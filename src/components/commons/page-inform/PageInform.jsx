import React from "react";
import { Image } from "react-bootstrap";

import DescriptionCard from "@/components/commons/description-card/DescriptionCard";
import { CHARACTER_IMAGES, getRndInteger } from "@/constants";

import "./page-inform.scss";
const PageInform = () => {
    return (
        <div className="page-inform">
            <div className="page-inform__container">
                <DescriptionCard
                    title="oops"
                    description="Current page is under construction. Stay tune for something amazing! ^^"
                />
                <Image
                    className="page-inform__character"
                    src={
                        CHARACTER_IMAGES[
                            getRndInteger(0, CHARACTER_IMAGES.length - 1)
                        ]
                    }
                />
            </div>
        </div>
    );
};

export default PageInform;
