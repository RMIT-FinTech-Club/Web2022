import React from "react";
import { Image } from "react-bootstrap";

const MomentItem = (props) => {
    const { title, date, image, description } = props;
    return (
        <>
            <div className="moment-item">
                <h5 className="moment-item-title">{title}</h5>
                <div className="moment-item-circle" />
                <p className="moment-item-date">{date ? date.substr(0, 7) : ""}</p>
                <div className="moment-item-divider" />
                <Image className="moment-item-img" src={image} alt={title} />
                <p className="moment-item-description">{description}</p>
            </div>
            <div className="moment-item-separation" />
        </>
    );
};

const MemorableMoments = ({ moments }) => {
    return (
        <div className="" data-aos="fade-up" id="memorable-moments">
            <div className="moments-container my-4 mx-auto">
                {moments.map((moment) => {
                    return (
                        <MomentItem
                            key={moment.id}
                            title={moment.name}
                            date={moment.date}
                            image={moment.cover}
                            description={moment.description}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default MemorableMoments;
