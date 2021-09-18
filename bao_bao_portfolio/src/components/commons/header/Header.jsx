import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Image, Offcanvas } from "react-bootstrap";

import { routes } from "@/configs";
import { user } from "@/mock/userData";
import HamburgerIcon from "@/assets/images/hamburger.svg";
import "./header.scss";
const Header = () => {
    const [show, setShow] = useState(false);
    return (
        <>
            <div className="header">
                <div className="header__title">{user.headerTitle}</div>
                <Button
                    className="header__menu"
                    variant="link"
                    onClick={() => setShow(true)}
                >
                    <Image className="header__menu-icon" src={HamburgerIcon} />
                </Button>
            </div>

            <Offcanvas
                className="header__drawer"
                placement="end"
                show={show}
                scroll={true}
                onHide={() => setShow(false)}
            >
                <Offcanvas.Body>
                    {routes.map((route) => {
                        if (route.isShowOnNavBar) {
                            return (
                                <div
                                    className="header__drawer-item"
                                    key={route.name}
                                >
                                    <Link
                                        className="header__drawer-link"
                                        to={route.path}
                                    >
                                        <Image src={route.icon} />
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
