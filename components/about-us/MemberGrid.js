import React from "react";
import { Image } from "react-bootstrap";

const Member = (props) => {
    const { image, posImage, name, position, department, contact } = props;
    return (
        <div className="member-info">
            <div className="member-images-container">
                <Image className="member-image" src={image} alt={name} />
                {posImage && <Image className="member-pos-image" src={posImage} alt={position} />}
            </div>
            <h4 className="fs-3 member-name">{name}</h4>
            <h5 className="member-position" style={{ textAlign: "center", padding: "0 10px" }}>
                {position}
            </h5>
            <p className="member-department" style={{ textAlign: "center" }}>
                <span style={{ fontWeight: "bold" }}>Department: </span>
                {department}
            </p>
        </div>
    );
};

const MemberGrid = ({ members }) => {
    return (
        <div className="members-grid py-5">
            {members.map((member) => {
                const { id, avatar, posImage, name, title, department, email } = member;
                return (
                    <Member
                        key={id}
                        image={avatar}
                        posImage={posImage}
                        name={name}
                        position={title}
                        department={department}
                        contact={email}
                    />
                );
            })}
        </div>
    );
};

export default MemberGrid;
