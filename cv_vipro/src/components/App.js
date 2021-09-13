import React from "react";
import NavBar from "./navigation/NavBar";
import "./../config/styles.scss";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    BrowserRouter,
} from "react-router-dom";

import TransformBackground from "./TransformBackground";
const App = () => {
    return (
        <div>
            <Router>
                <NavBar pageType="bao_dang/homepage" />
                <TransformBackground />
            </Router>
        </div>
    );
};

export default App;
