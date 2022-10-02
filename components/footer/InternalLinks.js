import React from "react";

const INTERNAL_LINKS = [
    {
        title: "About Us",
        path: "/about-us",
    },
    {
        title: "Projects",
        path: "/projects",
    },
    {
        title: "Events",
        path: "/events",
    },
    {
        title: "Moments",
        path: "/memorable-moments",
    },
];

const InternalLinks = () => {
    return (
        <div className="internal-links">
            <img src="/club-logo.png" className="footer-club-logo" />
            <h2 className="text-white footer-club-name">RMIT Vietnam FinTech Club</h2>
            <div className="i-links-container">
                {INTERNAL_LINKS.map((item) => {
                    return (
                        <a href={item.path} className="i-link text-white nav-link">
                            {item.title}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default InternalLinks;
