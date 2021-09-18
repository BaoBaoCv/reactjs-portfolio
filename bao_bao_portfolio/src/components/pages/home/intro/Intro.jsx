import React from "react";
import "./intro.scss";

import { user } from "@/mock";

const Intro = () => {
    return (
        <div className="intro">
            <div className="intro__content">{user.introStatement}</div>
        </div>
    );
};

export default Intro;
