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
    // Здесь вы можете настроить волнообразное изменение положения картинок в зависимости от индекса
    return `translateY(${Math.sin(scrollOffset / 200 + index) * 50}px)`;
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
