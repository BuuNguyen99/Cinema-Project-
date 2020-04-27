import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './CarouselStyle.css'

class CarouselBanner extends React.Component {
  render() {
    let Banner = {
      opacity: "1",
    }
    return (
      <div className="carousel" style= {Banner}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.galaxycine.vn/media/2020/2/28/banner-2048x682_1582877196494.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.galaxycine.vn/media/2020/2/28/n3-ss-2048x682_1582863674634.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.galaxycine.vn/media/2020/2/28/2048x682_1582860213657.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default CarouselBanner;
