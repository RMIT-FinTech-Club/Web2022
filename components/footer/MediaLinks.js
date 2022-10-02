import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const FACEBOOK_LINK = "https://www.facebook.com/rmitfintechclub";
const INSTAGRAM_LINK = "https://www.instagram.com/rmitfintechclub/";
const LINKEDIN_LINK = "https://www.linkedin.com/company/rmit-vietnam-fintech-club/";

const MediaLinkIcon = ({ Icon }) => {
    return <Icon color="#ffffff" size={25} />;
};

const MediaLinks = () => {
    return (
        <div className="media-links">
            <a href={FACEBOOK_LINK} className="media-link">
                <MediaLinkIcon Icon={FaFacebookF} />
            </a>
            <a href={INSTAGRAM_LINK} className="media-link">
                <MediaLinkIcon Icon={FaInstagram} />
            </a>
            <a href={LINKEDIN_LINK} className="media-link">
                <MediaLinkIcon Icon={FaLinkedin} />
            </a>
        </div>
    );
};

export default MediaLinks;