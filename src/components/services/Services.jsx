import "./Services.scss";

export default function Resume() {
  return (
    <div className="services" id="services">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <img src="assets/mobile.png" alt="" />
                </div>
                <h2>Responsive Design</h2>
                <p>
                  Responsive web design makes your web page look good on all
                  devices.
                </p>
                <span>Projects</span>
              </div>
            </div>
            <div className="right">
              <img src="assets/devices.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" />
      <img src="assets/arrow.png" className="arrow right" alt="" />
    </div>
  );
}
