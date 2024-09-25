import React from "react";
import Style from "../slide/Style.slide.css";
import Praia1 from "../img/praia1.jpg";
import Praia2 from "../img/praia2.jpg";

const slide = () => {
  return (
    <div className={Style.slide}>
      <div className="slide">
        <div className="img-slide">
          <a href="#">
            <img src={Praia1} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default slide;
