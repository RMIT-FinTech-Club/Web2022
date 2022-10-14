import React from "react";

const Member = (props) => {
    const { image, posImage, name, position, department, contact } = props;
    return (
        <div className="member-info">
            <div className="member-images-container">
                <img className="member-image" src={image} alt={name} />
                {posImage && <img className="member-pos-image" src={posImage} alt={position} />}
            </div>
            <h4 className="fs-3 member-name">{name}</h4>
            <h5 className="member-position" style={{ textAlign: "center" }}>
                {position}
            </h5>
            <p className="member-department" style={{ textAlign: "center" }}>
                <span style={{ fontWeight: "bold" }}>Department: </span>
                {department}
            </p>
            <p className="member-contact" style={{ textAlign: "center" }}>
                <span style={{ fontWeight: "bold" }}>Contact: </span>
                {contact}
            </p>
        </div>
    );
};

const MemberGrid = ({ members }) => {
    return (
        <div className="members-grid py-5">
            {members.map((member) => {
                const { avatar, posImage, name, title, department, email } = member;
                return (
                    <Member
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
