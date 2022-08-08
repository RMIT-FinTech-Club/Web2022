import React from "react";

const SectionTitle = ({title}) => {
    return (
      <div className="section-header">
        <div className="section-header-line"></div>
        <h3 className="display-5 section-title">{title}</h3>
        <div className="section-header-line"></div>
      </div>
    )
  }

export default SectionTitle;