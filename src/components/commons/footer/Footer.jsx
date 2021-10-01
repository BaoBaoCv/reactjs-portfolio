import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Image } from "react-bootstrap";
import {
    faFacebook,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

import baoPhamAvt from "@/assets/images/bao-pham-avt.jpg";
import "./footer.scss";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__statement item">
                <div>This project was developed by: </div>
                <div>BAO</div>
                <div>@Copyright 2021 All right reserved</div>
            </div>
            <div className="footer__dev item">
                <Image
                    src={baoPhamAvt}
                    className="footer__dev-avt"
                    roundedCircle
                ></Image>
                <div className="footer__dev-info">
                    <div className="footer__dev-icons">
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="fa-2x"
                            color="white"
                        />
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="fa-2x"
                            color="white"
                        />
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="fa-2x"
                            color="white"
                        />
                    </div>
                    <div>Pham Gia Bao</div>
                    <div>Software Developer</div>
                </div>
            </div>
            <div className="footer__dev item">
                <Image
                    src={baoPhamAvt}
                    className="footer__dev-avt"
                    roundedCircle
                ></Image>
                <div>
                    <div>
                        <FontAwesomeIcon
                            icon={faFacebook}
                            className="fa-2x"
                            color="white"
                        />
                        <FontAwesomeIcon
                            icon={faLinkedin}
                            className="fa-2x"
                            color="white"
                        />
                        <FontAwesomeIcon
                            icon={faGithub}
                            className="fa-2x"
                            color="white"
                        />
                    </div>
                    <div>Pham Gia Bao</div>
                    <div>Software Developer</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
