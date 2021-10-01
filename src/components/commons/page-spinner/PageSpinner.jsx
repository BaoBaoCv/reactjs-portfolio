import React from "react";
import { PacmanLoader } from "react-spinners";

const PageSpinner = () => {
    const style = { position: "fixed", top: "50%", left: "50%", transform: "translate(-50%, -50%)" };
    return (
        <div className="spinner" style={style}>
            <PacmanLoader
                size={30}
                color={'#9b51e0'}
            />
        </div>
    );
};

export default PageSpinner;
