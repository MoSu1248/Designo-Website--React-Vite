import React from "react";
import "./footerInfo.scss"


export default function FooterInfo() {
  return (
    <div className="info">
      <div className="info__address">
        <p>Designo Central Office</p>
        <p>3886 Wellington Street</p>
        <p>Toronto, Ontario M9C 3J5</p>
      </div>

      <div className="info__contact">
        <p>Contact Us(Central Office)</p>
        <p>P : +1 253-863-8967</p>
        <p>M : contact@designo.co</p>
      </div>
    </div>
  );
}
