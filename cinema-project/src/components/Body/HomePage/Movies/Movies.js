import React from "react";
import ItemMovie from "./ItemMovie";
import "./Movies.css";

class Movies extends React.Component {
  render() {
    let linksStyle = {
      color: "black",
      textTransform: "uppercase"
    };
    return (
      <div className="container mb-5">
        <div className="row">
          <ul className="nav nav-tabs movie-home link-cout">
            <li className=" mr-3 link-wrapper">
              <a
                className="link hover-2"
                href="#tab_default_1"
                data-toggle="tab"
                aria-expanded="true"
                style={linksStyle}
              >
                Phim đang chiếu
              </a>
            </li>
            <li className=" mr-3 link-wrapper">
              <a
                className="link hover-2"
                href="#tab_default_1"
                data-toggle="tab"
                aria-expanded="true"
                style={linksStyle}
              >
                Phim sắp chiếu
              </a>
            </li>
          </ul>
        </div>
        <div className="row">
          <ItemMovie />
        </div>
        <div className="row mt-3">
          <div className="col-md-12 col-sm-12 col-xs-12 pull-right">
            <a href="/phim-dang-chieu" className="btn secondary btn-outline-orange">
              Xem thêm
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Movies;
