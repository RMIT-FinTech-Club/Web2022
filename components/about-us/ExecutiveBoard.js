import React from "react";

import MemberGrid from "./MemberGrid";
import SectionTitle from "./SectionTitle";

const ExecutiveBoard = ({ data }) => {
    let deptHead = [];
    let pSuite = [];

    for (let mem of data){
        if (mem.title.substring(0,4) === 'Head')
            deptHead.push(mem);
        else
            pSuite.push(mem);
    }

    return (
        <div className="members-exec">
            <SectionTitle title={"P - Suite"} />
            <MemberGrid members={pSuite} style="background-color:black"/>
            <SectionTitle title={"Head of Departments"} />
            <MemberGrid members={deptHead} />

        </div>
    );
};

export default ExecutiveBoard;
