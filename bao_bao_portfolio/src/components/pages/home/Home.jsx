import React from "react";

import "./home.scss";
import Intro from "./intro/Intro";
import Timeline from "./timeline/Timeline";
const Home = () => {
    return (
        <div className="home">
            {/* <Intro /> */}
            <Timeline />
        </div>
    );
};

export default Home;
