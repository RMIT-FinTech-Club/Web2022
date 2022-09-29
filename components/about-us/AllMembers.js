import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap";

import ExecutiveBoard from "./ExecutiveBoard";
import CurrentMembers from "./CurrentMembers";
import PastGenerations from "./PastGenerations";

const AllMembers = () => {
    return (
        <div className="" data-aos="fade-up" id="members">
            <div className="members-header py-5">
                <h2 className="display-4 text-white ">Our Members</h2>
            </div>
            <div className="members-body">
                <ExecutiveBoard />
                <CurrentMembers />
                <PastGenerations />
            </div>
        </div>
    );
};

export default AllMembers;
