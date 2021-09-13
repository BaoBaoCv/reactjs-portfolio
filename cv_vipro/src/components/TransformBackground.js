import React from "react";

function TransformBackground() {
    const getRandomArbitrary = (min, max) => {
        return Math.random() * (max - min) + min;
    };
    const style = {
        position: "absolute",
        width: getRandomArbitrary(200, 700) + "px",
        height: getRandomArbitrary(200, 700) + "px",
        left: getRandomArbitrary(0, document.body.offsetWidth) + "px",
        top:
            getRandomArbitrary(0, document.documentElement.scrollHeight) + "px",
        background:
            "linear-gradient(226.25deg, rgba(255, 187, 150, 0.36) -2.27%, rgba(47, 84, 235, 0.36) 100%)",
        mixBlendMode: "hard-light",
        filter: "blur(162.359px)",
        transform: "rotate(-90deg)",
    };
    return <div className="gradient-background" style={style}></div>;
}

export default TransformBackground;
