import React, { useState, useMemo } from "react";

import MemberGrid from "./MemberGrid";
import SectionTitle from "./SectionTitle";

const CurrentMembers = ({ data }) => {
    const [activeDept, setActiveDept] = useState("Business");
    const displayedMembers = useMemo(() => {
        return data.filter((member) => member.department === activeDept);
    }, [activeDept]);

    return (
        <div className="members-other">
            <SectionTitle title={"Members"} />
            <div className="select-department-container my-4">
                <div className="select-department">
                    <div
                        onClick={() => {
                            setActiveDept("Business");
                        }}
                        className="select-department-item py-2 text-white bg-primary"
                    >
                        Business
                    </div>
                    <div
                        onClick={() => {
                            setActiveDept("Technology");
                        }}
                        className="select-department-item py-2 text-white bg-secondary"
                    >
                        Technology
                    </div>
                    <div
                        onClick={() => {
                            setActiveDept("Marketing");
                        }}
                        className="select-department-item py-2 text-white bg-ft-skyblue"
                    >
                        Marketing
                    </div>
                    <div
                        onClick={() => {
                            setActiveDept("HR");
                        }}
                        className="select-department-item py-2 text-white bg-ft-gray"
                    >
                        HR
                    </div>
                </div>
            </div>
            <MemberGrid members={displayedMembers} />
        </div>
    );
};

export default CurrentMembers;
