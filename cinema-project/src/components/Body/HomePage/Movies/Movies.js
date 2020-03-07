import React from "react";
import ItemMovie from "./ItemMovie";
import "./Movies.css";

class Movies extends React.Component {
  render() {
    return (
      <div className="container mb-5">
        <div className="row">
          <ul className="nav nav-tabs movie-home link-cout">
            <li className=" mr-3 link-wrapper">
              <h4
                className="link hover-2"
                data-toggle="tab"
                aria-expanded="true"
              >
                Phim đang chiếu
              </h4>
            </li>
            <li className=" mr-3 link-wrapper">
              <h4
                className="link hover-2"
                data-toggle="tab"
                aria-expanded="true"
              >
                Phim sắp chiếu
              </h4>
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
