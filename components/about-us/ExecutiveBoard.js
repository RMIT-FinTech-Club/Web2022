import React from "react";

import execInfo from "../../data/exec.json";
import MemberGrid from "./MemberGrid";
import SectionTitle from "./SectionTitle";

const ExecutiveBoard = () => {
    return (
        <div className="members-exec">
            <SectionTitle title={"Executive Board"} />
            <div className="px-5">
                <MemberGrid members={execInfo} />
            </div>
        </div>
    );
};

export default ExecutiveBoard;
