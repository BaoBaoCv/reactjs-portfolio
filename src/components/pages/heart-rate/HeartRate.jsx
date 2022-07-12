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
            <img src={Mono} style={{height: '15rem',  marginTop: '1rem'}}/>
            <h1 style={{fontSize: '32px'}}>{userData}</h1>
        </div>
    );
};

export default HeartRate;
