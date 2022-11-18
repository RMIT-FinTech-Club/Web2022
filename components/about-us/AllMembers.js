import React from "react";

import ExecutiveBoard from "./ExecutiveBoard";
import CurrentMembers from "./CurrentMembers";
import PastGenerations from "./PastGenerations";

const AllMembers = ({ execs, mems, pastGens }) => {
    return (
        <div className="" data-aos="fade-up" id="members">
            <div className="members-header py-5">
                <h2 className="display-4 text-white ">Our Members</h2>
            </div>
            <div className="members-body">
                <ExecutiveBoard data={execs} />
                <CurrentMembers data={mems} />
                {/* <PastGenerations data={pastGens} /> */}
            </div>
        </div>
    );
};

export default AllMembers;
