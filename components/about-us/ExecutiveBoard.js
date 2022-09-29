import React from "react";

import execInfo from "../../data/exec.json";
import MemberGrid from "./MemberGrid";
import SectionTitle from "./SectionTitle";

const ExecutiveBoard = () => {
    return (
        <div className="members-exec">
            <SectionTitle title={"Executive Board"} />
            <MemberGrid members={execInfo} />
        </div>
    );
};

export default ExecutiveBoard;
