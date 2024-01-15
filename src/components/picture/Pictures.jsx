import React from "react";
import {
  firstImage,
  secondImage,
  thirdImage,
  fourthImage,
  fifthImage,
  sixthImage,
} from "./index";
import scss from "./Pictures.module.scss";

const Pictures = () => {
  return (
    <>
      <div className={scss.img_page}>
        <div className={scss.img_wrap}>
          <img src={firstImage} alt="first" />
        </div>
        <div className={scss.img_wrap}>
          <img src={secondImage} alt="second" />
        </div>
        <div className={scss.img_wrap}>
          <img src={thirdImage} alt="third" />
        </div>
        <div className={scss.img_wrap}>
          <img src={fourthImage} alt="fourth" />
        </div>
        <div className={scss.img_wrap}>
          <img src={fifthImage} alt="fifth" />
        </div>
        <div className={scss.img_wrap}>
          <img src={sixthImage} alt="sixth" />
        </div>
      </div>
    </>
  );
};

export default Pictures;
