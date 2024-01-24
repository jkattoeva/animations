import React, { useState, useEffect } from "react";
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
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getTransformValue = (index) => {
    const translateY = Math.sin((scrollOffset + index * 100) / 200) * 200;
    const scale = 1 - Math.abs(translateY / 1000);

    return `translateY(${translateY}px) scale(${scale})`;
  };

  return (
    <>
      <div className={scss.img_page}>
        {[
          firstImage,
          secondImage,
          thirdImage,
          fourthImage,
          fifthImage,
          sixthImage,
        ].map((image, index) => (
          <div
            key={index}
            className={scss.img_wrap}
            style={{ transform: getTransformValue(index) }}
          >
            <img src={image} alt={`image-${index}`} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Pictures;
