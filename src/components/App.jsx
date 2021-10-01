import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "@/configs";
import Header from "@/components/commons/header/Header";
import GradientBg from "./commons/gradient-bg/GradientBg";
import Footer from "./commons/footer/Footer";

import "@/components/app.scss";
const App = () => {
    return (
        <div className="app">
            <Header />
            <Switch>
                {routes.map((route) => (
                    <Route
                        key={route.name}
                        exact
                        path={route.path}
                        component={route.component}
                    />
                ))}
            </Switch>
            <GradientBg />
            <Footer />
        </div>
    );
};

export default App;
