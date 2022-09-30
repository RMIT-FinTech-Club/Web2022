import React from "react";

import execInfo from "../../data/exec.json";
import MemberGrid from "./MemberGrid";
import SectionTitle from "./SectionTitle";

const ExecutiveBoard = ({ data }) => {
    return (
        <div className="members-exec">
            <SectionTitle title={"Executive Board"} />
            <MemberGrid members={data} />
        </div>
    );
};

export default ExecutiveBoard;
