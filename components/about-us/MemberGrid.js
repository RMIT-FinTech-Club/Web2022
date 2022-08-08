import React from 'react';

const Member = (props) => {
    const {image, posImage, name, position, department, contact} = props;
    return (
      <div className="member-info">
        <div className="member-images-container">
          <img className="member-image" src={image} alt={name} />
          {posImage && <img className="member-pos-image" src={posImage} alt={position} />}
        </div>
        <h4 className="fs-3 member-name">{name}</h4>
        <h5 className="member-position">{position}</h5>
        <p className="member-department">Department: {department}</p>
        <p className="member-contact">Contact: {contact}</p>
      </div>
    );
  }


const MemberGrid = ({members}) => {
    return (
        <div className="members-grid py-5">
            {members.map(member => {
              const {image, posImage, name, position, department, contact} = member;
              return <Member 
                        image={image} 
                        posImage={posImage}
                        name={name} 
                        position={position} 
                        department={department} 
                        contact={contact} 
                      />
            })}
          </div>
    )
}

export default MemberGrid;