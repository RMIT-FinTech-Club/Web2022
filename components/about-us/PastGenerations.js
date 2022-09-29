import React, { useState } from "react";
import Accordion from "react-bootstrap/Accordion";

import execInfo from "../../data/exec.json";
import MemberGrid from "./MemberGrid";
import SectionTitle from "./SectionTitle";

const PastGenerations = () => {
    const GEN_COUNT = 3;
    const [gen, setGen] = useState(1);
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
                                {[...Array(GEN_COUNT)].map((_, _gen) => {
                                    ++_gen;
                                    if (_gen === gen) return;
                                    return (
                                        <div className="selected-gen text-secondary my-2" onClick={() => setGen(_gen)}>
                                            <h5>Gen {_gen}</h5>
                                        </div>
                                    );
                                })}
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>
            <div className="px-5">
                <MemberGrid members={execInfo} />
            </div>
        </div>
    );
};

export default PastGenerations;
