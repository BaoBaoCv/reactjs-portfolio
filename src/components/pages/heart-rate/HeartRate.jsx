import React, { useEffect, useState } from "react";

import PageSpinner from "@/components/commons/page-spinner/PageSpinner";
import ImageWithTitle from "../project-detail/ImageWithTitle";
import HeartImg from './img/kawaii-things-pixel-art-grid-pixel-heart-cool-animations.gif';
import Mono from './img/monophy.gif';

const HeartRate = () => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        setUserData(80);
    }, []);
    return !userData ? (
        <PageSpinner />
    ) : (
        <div className="home">
            <ImageWithTitle src1={HeartImg}/>
            <ImageWithTitle src1={Mono} style={{height: '20vh'}}/>
            <p style={{fontSize: '32px'}}>{userData}</p>
        </div>
    );
};

export default HeartRate;
