import { useState } from "react";
import "./Services.scss";

export default function Resume() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "./assets/1-mobile.png",
      title: "Web Design",
      desc: "Built with responsive web design in mind, which makes your web page look good on all devices. Your application will be built according to your specific business needs.",
      img: "assets/devices.svg",
    },
    {
      id: "2",
      icon: "./assets/2-code.png",
      title: "Code Refactoring",
      desc: "I will focuses exclusively on removing errors/bugs and or getting your code into a desirable state for you and your development team.",
      img: "assets/bug.svg",
    },
    {
      id: "3",
      icon: "./assets/3-pshop.png",
      title: "Branding and PhotoShop",
      desc: "Editing an image or creating a Brand Logo can require a lot of PhotoShop knowledge. No need to watch countless tutorials on YouTube, I got you!",
      img: "assets/design.svg",
    },
  ];

  const arrowClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="services" id="services">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => arrowClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => arrowClick()}
      />
    </div>
  );
}
