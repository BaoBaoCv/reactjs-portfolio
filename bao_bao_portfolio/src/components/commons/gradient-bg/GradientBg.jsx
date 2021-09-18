import React, { useEffect, useState } from "react";
import { getRndInteger } from "@/constants";
import "./gradient-bg.scss";

const gradientBgs = [
    "linear-gradient(226.25deg, rgba(255, 187, 150, 0.36) -2.27%, rgba(47, 84, 235, 0.36) 100%)",
    "linear-gradient(226.25deg, rgba(248, 199, 200, 0.15) -2.27%, rgba(67, 77, 203, 0.15) 100%)",
    "linear-gradient(226.25deg, rgba(250, 27, 255, 0.15) -2.27%, rgba(67, 77, 203, 0.15) 100%)",
];

const getWindowDimensions = () => {
    const { innerWidth, innerHeight } = window;
    return { width: innerWidth, height: innerHeight };
};

const genGradientDots = (fullPageHeight, windowHeight) => {
    const dotsNum = Math.round(fullPageHeight / windowHeight);
    const dots = [];
    let counter = 0;
    for (let i = 0; i < dotsNum; i++) {
        for (let j = 0; j < 2; j++) {
            const minSize = 20;
            const maxSize = 40;
            dots.push({
                position: "absolute",
                width: getRndInteger(minSize, maxSize) + "%",
                height: getRndInteger(minSize, maxSize) + "%",
                left: getRndInteger(0, 100) + "%",
                top:
                    getRndInteger(i * windowHeight, (i + 0.2) * windowHeight) +
                    "px",
                background: gradientBgs[counter++ % gradientBgs.length],
                transform: `rotate(${getRndInteger(0, 360)}deg)`,
            });
        }
    }
    return dots;
};
let isFirstRender = true;

const GradientBg = () => {
    const [windowSize, setWindowSize] = useState(getWindowDimensions);
    const [gradientDots, setGradientDots] = useState([]);

    useEffect(() => {
        setGradientDots(
            genGradientDots(
                document.documentElement.offsetHeight,
                windowSize.height
            )
        );

        const handleResize = () => {
            setWindowSize(getWindowDimensions);
        };
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        if (isFirstRender) {
            isFirstRender = false;
            return;
        }
        const timerId = setTimeout(() => {
            setGradientDots(
                genGradientDots(
                    document.documentElement.offsetHeight,
                    windowSize.height
                )
            );
        }, 500);
        return () => clearTimeout(timerId);
    }, [windowSize]);

    return (
        <div className="gradient-bg">
            {gradientDots.map((dot, index) => (
                <div key={index} className="gradient-bg__dot" style={dot} />
            ))}
        </div>
    );
};

export default GradientBg;
