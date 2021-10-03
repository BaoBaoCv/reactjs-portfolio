import React, { useEffect, useState } from "react";

import "./home.scss";
import Intro from "./intro/Intro";
import Timeline from "./timeline/Timeline";
import PageSpinner from "@/components/commons/page-spinner/PageSpinner";

const Home = () => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const { user } = await import("../../../mock/userData.js");
            setUserData(user);
        };
        fetchData();

    }, []);
    return !userData ? (
        <PageSpinner />
    ) : (
        <div className="home">
            <Intro user={userData} />
            <Timeline user={userData} timelineType={userData.projects} />
            <Timeline user={userData} timelineType={userData.achievements} />
        </div>
    );
};

export default Home;
