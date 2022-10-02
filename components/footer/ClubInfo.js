import React from "react";

const ClubInfo = () => {
    return (
        <div className="club-info">
            <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                <p className="text-white club-info-text">Email: fintechclub.sgs@rmit.edu.vn</p>
                <p className="text-white club-info-text">
                    Address: 702 Nguyen Van Linh, Tan Hung, Dist 7, Ho Chi Minh City, Viet Nam
                </p>
            </div>
            <p className="club-info-text copy-right">Copyright © 2022. RMIT FinTech Club. All rights reserved.</p>
        </div>
    );
};

export default ClubInfo;
