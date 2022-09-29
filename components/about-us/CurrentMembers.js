import React from "react";

import execInfo from "../../data/exec.json";
import MemberGrid from "./MemberGrid";
import SectionTitle from "./SectionTitle";

const CurrentMembers = () => {
    return (
        <div className="members-other">
            <SectionTitle title={"Members"} />
            <div className="select-department-container my-4">
                <div className="select-department">
                    <div className="select-department-item py-2 text-white bg-primary">Business</div>
                    <div className="select-department-item py-2 text-white bg-secondary">Technology</div>
                    <div className="select-department-item py-2 text-white bg-ft-skyblue">Marketing</div>
                    <div className="select-department-item py-2 text-white bg-ft-gray">HR</div>
                </div>
            </div>
            <MemberGrid members={execInfo} />
        </div>
    );
};

export default CurrentMembers;
