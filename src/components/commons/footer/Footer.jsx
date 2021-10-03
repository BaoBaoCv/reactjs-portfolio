import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { user } from "@/mock";

import "./footer.scss";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__statement item">
                <div>This project was developed by: </div>
                <div>BAOs</div>
                <div>With Reactjs</div>
            </div>
            <div className="footer__dev item">
                <div className="footer__dev-info">
                    <div>@Copyright 2021 All right reserved</div>
                </div>
            </div>
            <div className="footer__dev item">
                <a href={user.facebookUrl}>
                    <FontAwesomeIcon
                        icon={faFacebook}
                        className="fa-2x"
                        color="white"
                    />
                </a>
                <a href={user.linkedInUrl}>
                    <FontAwesomeIcon
                        icon={faLinkedin}
                        className="fa-2x"
                        color="white"
                    />
                </a>
                <a href={user.githubUrl}>
                    <FontAwesomeIcon
                        icon={faGithub}
                        className="fa-2x"
                        color="white"
                    />
                </a>
            </div>
        </div>
    );
};

export default Footer;
