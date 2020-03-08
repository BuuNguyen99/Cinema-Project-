import React from "react";
import Carousel from "react-bootstrap/Carousel";

class CarouselBanner extends React.Component {
  render() {
    let Banner = {
      opacity: "1",
    }
    return (
      <div className="mb-5" style= {Banner}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.galaxycine.vn/media/2020/2/28/banner-2048x682_1582877196494.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.galaxycine.vn/media/2020/2/28/n3-ss-2048x682_1582863674634.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://www.galaxycine.vn/media/2020/2/28/2048x682_1582860213657.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}
export default CarouselBanner;
