import React, {useState} from 'react';
import Accordion from 'react-bootstrap/Accordion';

import execInfo from "../../data/exec.json";
import MemberGrid from './MemberGrid';
import SectionTitle from './SectionTitle';

const PastGenerations = () => {
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
          <div onClick={() => {setGen(2)}}><h2 className="selected-gen text-secondary my-2">Gen 2</h2></div>
          <div onClick={() => {setGen(3)}}><h2 className="selected-gen text-secondary my-2">Gen 3</h2></div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
          </div>
          </div>
          <MemberGrid members={execInfo} />
        </div>
    )
}

export default PastGenerations;