import React, { useState } from "react";
import { Link, useHistory, BrowserRouter as Router } from "react-router-dom";
import { Button, Image, Offcanvas } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { routes } from "@/configs";
import { user } from "@/mock/userData";
import BackHome from "@/assets/images/back-home.svg";
import HamburgerIcon from "@/assets/images/hamburger.svg";
import "./header.scss";

const Header = () => {
    const [show, setShow] = useState(false);
    let history = useHistory();
    return (
        <>
            <div className="header">
                <Router>
                    <div className="header__title">
                        <Link to="/">
                            {user.headerTitle}
                        </Link>
                    </div>
                </Router>
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
            </div >

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
                                        to={route.path}
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
