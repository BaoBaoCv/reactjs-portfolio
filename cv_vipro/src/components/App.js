import React from "react";
import NavBar from './Navigation/NavBar'
import './../config/styles.scss'
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from "react-router-dom";
const App = () => {
    
    return (
        <>
        <Router>
            <NavBar pageType="bao_dang/homepage"/>
        </Router>
        </>
    );
};

export default App;
