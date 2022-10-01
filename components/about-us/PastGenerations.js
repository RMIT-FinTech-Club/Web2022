import React, { useState, useMemo } from "react";
import Accordion from "react-bootstrap/Accordion";

import MemberGrid from "./MemberGrid";
import SectionTitle from "./SectionTitle";

const PAST_GENS = [1, 2];

const PastGenerations = ({ data }) => {
    const [gen, setGen] = useState(PAST_GENS[PAST_GENS.length - 1]);

    const displayedMembers = useMemo(() => {
        return data.filter((member) => member.gen === gen);
    }, [gen]);

    return (
        <div className="past-gen">
            <SectionTitle title={"Past Generations"} />
            <div className="select-gen-container my-4">
                <div className="select-gen" key={gen}>
                    <Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header className="select-gen-accordion-header">
                                <h2 className="selected-gen text-secondary">Gen {gen}</h2>
                            </Accordion.Header>
                            <Accordion.Body>
                                {PAST_GENS.map((_gen) => {
                                    return _gen === gen ? null : (
                                        <div
                                            key={_gen}
                                            className="selected-gen text-secondary my-2"
                                            onClick={() => setGen(_gen)}
                                        >
                                            <h2>Gen {_gen}</h2>
                                        </div>
                                    );
                                })}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <MemberGrid members={displayedMembers} />
        </div>
    );
};

export default PastGenerations;
