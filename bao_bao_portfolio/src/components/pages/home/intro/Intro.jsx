import React from "react";
import DescriptionCard from "@/components/commons/description-card/DescriptionCard";
import { user } from "@/mock";
import "./intro.scss";

const Intro = () => {
    return (
        <div className="intro">
            <DescriptionCard
                className="intro__card"
                width={520}
                height={90}
                isFlexHorizontal={true}
                title={"String"}
                description={"Bao Dang Kim - Hello World"}
                descriptionColor={"#FFE818"}
            />
            <DescriptionCard
                width={520}
                height={219}
                title={"About"}
                description={
                    "CURRENTLY, I AM A WEB DEVELOPER & PROGRAMER WHO LOVES DOING THINGS WITH FRESH MINDS. PREVIOUSLY, I WORKED AS PROGRAMMER AT APPLE, SAMSUNG & XIAOMI. NOW I AM FREELANCER AND HAPPY TO SEE YOU."
                }
            />
        </div>
    );
};

export default Intro;
