import React from "react";
import NavBar from './Navigation/NavBar'
import './../config/styles.scss'
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
import TransformBackground from "./TransformBackground";
const App = () => {
    
    return (
        <>
        <Router>
            <NavBar pageType="bao_dang/homepage"/>
            <TransformBackground/>
        </Router>
        </>
    );
};

export default App;
