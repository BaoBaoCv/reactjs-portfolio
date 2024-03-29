import React, { useState } from "react";
import {
    Link,
    useHistory,
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { Button, Image, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { routes } from "@/configs";
import { user } from "@/mock/userData";
import BackHome from "@/assets/images/back-home.svg";
import HamburgerIcon from "@/assets/images/hamburger.svg";
import "./header.scss";
import Home from "@/components/pages/home/Home";

const Header = () => {
    const [show, setShow] = useState(false);
    let history = useHistory();
    return (
        <>
            <div className="header">
                <Link
                    className="header__title"
                    to={{
                        pathname: "/",
                        state: { previousRoute: history.location.pathname },
                    }}
                >
                    {user.headerTitle}
                </Link>
                <div className="header__menu">
                    <Image
                        onClick={() => {
                            history.goBack();
                        }}
                        className="header__menu-home"
                        src={BackHome}
                    />
                    <Image
                        onClick={() => setShow(true)}
                        className="header__menu-icon"
                        src={HamburgerIcon}
                    />
                </div>
            </div>

            <Offcanvas
                className="header__drawer"
                placement="end"
                show={show}
                scroll={true}
                onHide={() => setShow(false)}
            >
                <Offcanvas.Header closeButton closeVariant={"white"}>
                    <Offcanvas.Title />
                </Offcanvas.Header>
                <Offcanvas.Body>
                    {routes.map((route) => {
                        if (route.isShowOnNavBar) {
                            return (
                                <div
                                    className="header__drawer-item"
                                    key={route.name}
                                >
                                    <Link
                                        onClick={() => setShow(false)}
                                        className="header__drawer-link"
                                        to={{
                                            pathname: route.path,
                                            state: {
                                                previousRoute:
                                                    history.location.pathname,
                                            },
                                        }}
                                    >
                                        <Image
                                            className={"header__drawer-img"}
                                            src={route.icon}
                                        />
                                    </Link>
                                    <div className="header__drawer-info">
                                        <div
                                            className={`header__drawer-title header__drawer-${route.name}`}
                                        >
                                            {route.name}
                                        </div>
                                        <div className="header__drawer-detail">
                                            {route.detail}
                                        </div>
                                    </div>
                                </div>
                            );
                        }
                    })}
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default Header;
