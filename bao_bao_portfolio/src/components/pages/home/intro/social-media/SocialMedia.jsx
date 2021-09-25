import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faFacebook,
    faLinkedin,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { user } from "@/mock";
library.add(faFacebook, faLinkedin, faInstagram);

import React from "react";

function SocialMedia() {
    const imageStyle = {
        marginRight: "30px",
    };
    return (
        <div style={{ width: "100%", display: "flex" }}>
            <a href={user.facebookUrl}>
                <FontAwesomeIcon
                    icon={["fab", "facebook"]}
                    className="fa-2x"
                    style={imageStyle}
                    color="white"
                />
            </a>
            <a href={user.linkedInUrl}>
                <FontAwesomeIcon
                    icon={["fab", "linkedin"]}
                    className="fa-2x"
                    style={imageStyle}
                    color="white"
                />
            </a>
            <a href={user.instagramUrl}>
                <FontAwesomeIcon
                    icon={["fab", "instagram"]}
                    className="fa-2x"
                    style={imageStyle}
                />
            </a>
        </div>
    );
}

export default SocialMedia;
