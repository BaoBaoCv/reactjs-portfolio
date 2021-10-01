import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { user } from "@/mock";

import React from "react";

const SocialMedia = () => {
    const imageStyle = {
        marginRight: "30px",
    };
    return (
        <div style={{ width: "100%", display: "flex" }}>
            <a href={user.facebookUrl}>
                <FontAwesomeIcon
                    icon={faFacebook}
                    className="fa-2x"
                    style={imageStyle}
                    color="white"
                />
            </a>
            <a href={user.linkedInUrl}>
                <FontAwesomeIcon
                    icon={faLinkedin}
                    className="fa-2x"
                    style={imageStyle}
                    color="white"
                />
            </a>
            <a href={user.instagramUrl}>
                <FontAwesomeIcon
                    icon={faInstagram}
                    className="fa-2x"
                    style={imageStyle}
                    color="white"
                />
            </a>
        </div>
    );
};

export default SocialMedia;
