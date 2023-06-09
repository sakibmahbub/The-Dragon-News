import React from "react";
import qzone1 from "../../../assets/qZone1.png";
import qzone2 from "../../../assets/qZone2.png";
import qzone3 from "../../../assets/qZone3.png";

const QZone = () => {
  return (
    <div className="bg-light p-2 mb-3">
      <h4>Q-Zone</h4>
      <div>
        <img src={qzone1} />
        <img src={qzone2} />
        <img src={qzone3} />
      </div>
    </div>
  );
};

export default QZone;
