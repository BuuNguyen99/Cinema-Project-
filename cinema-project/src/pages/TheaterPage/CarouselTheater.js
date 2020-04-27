import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './CarouselTheater.css'

class CarouselTheater extends React.Component {
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
              src="https://www.galaxycine.vn/media/2019/5/6/rapgiave-hinhrap-camau-01_1557128016683.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.galaxycine.vn/media/2019/5/6/rapgiave-hinhrap-camau-02_1557128259980.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.galaxycine.vn/media/2019/5/6/rapgiave-hinhrap-camau-03_1557128024900.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default CarouselTheater;
