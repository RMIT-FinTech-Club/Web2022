import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

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
            <Image alt="Club logo" src="/club-logo.png" className="footer-club-logo" />
            <h2 className="text-white footer-club-name">RMIT Vietnam FinTech Club</h2>
            <div className="i-links-container">
                {INTERNAL_LINKS.map((item) => {
                    return (
                        <Link key={item.path} href={item.path} className="i-link text-white nav-link">
                            {item.title}
                        </Link>
                    );
                })}
            </div>
        </div>
    );
};

export default InternalLinks;
