import React from "react";

import momentsData from '../data/moments.json';

const MomentItem = (props) => {
  const {title, date, image, description} = props;
  return (
    <>
      <div className="moment-item">
        <h3 className="moment-item-title">{title}</h3>
        <div className="moment-item-circle"/>
        <p className="moment-item-date">{date}</p>
        <div className="moment-item-divider"/>
        <img className="moment-item-img" src={image} alt={title} />
        <p className="moment-item-description">{description}</p>
      </div>
      <div className="moment-item-separation" />
    </>
  )
}

const MemorableMoments = () => {
  return (
    <div className="" data-aos="fade-up" id="memorable-moments">
      <div className="moments-container my-4 mx-auto">
        {momentsData.map(moment => {
          return (
            <MomentItem 
              title={moment.title} 
              date={moment.date}
              image={moment.image}
              description={moment.description}
            />
          )
        })}
      </div>
    </div>
  );
};

export default MemorableMoments;
