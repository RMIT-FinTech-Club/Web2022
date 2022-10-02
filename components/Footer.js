import React from "react";

import ClubInfo from "./footer/ClubInfo";
import InternalLinks from "./footer/InternalLinks";
import MediaLinks from "./footer/MediaLinks";

const Footer = () => {
    return (
        <footer id="footer" className="footer px-5 py-5">
            <ClubInfo />
            <InternalLinks />
            <MediaLinks />
        </footer>
    );
};

export default Footer;
