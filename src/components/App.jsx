import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "@/configs";
import Header from "@/components/commons/header/Header";
import GradientBg from "./commons/gradient-bg/GradientBg";
import Footer from "./commons/footer/Footer";
import Popup from "@/components/pages/project-detail/popup/Popup";
import HeartRate from "@/components/pages/heart-rate/HeartRate";
import { useLocation } from "react-router";
import "@/components/app.scss";
const App = () => {
    let location = useLocation();
    let background = location.state && location.state.background;
    return (
        <div className="app">
            <Header />
            <Switch location={background || location}>
                {routes.map((route) => (
                    <Route
                        key={route.name}
                        exact={route.path !== "/projectDetail" && route.path !== "/modal"}
                        path={route.path}
                        component={route.component}
                    />
                ))}
                <Route path={"/my-heart-rate"} component={HeartRate} />
            </Switch>
            {background && <Route path="/modal/:id" children={<Popup />} />}
            <GradientBg />
            <Footer />
        </div>
    );
};

export default App;
