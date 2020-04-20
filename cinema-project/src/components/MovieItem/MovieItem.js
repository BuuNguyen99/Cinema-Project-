import React from "react";
import "./MovieItem.css";
import OpenVideo from "./OpenVideo";
class MovieItem extends React.Component {
  render() {
    let { movie } = this.props;
    
    return (
      <div className="col-lg-4 col-md-6 col-sm-6 p-2 mt-2">
        <div className="box">
          <img src= {movie.image}/>
          <div className="box-content">
            <h6 className="title">{movie.name}</h6>
            <span className="post">{movie.type}</span>
            <ul className="icon">
              <li>
                <a href="#">
                <i className="fas fa-shopping-cart"></i>
                </a>
              </li>
              <li>
                <OpenVideo/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
export default MovieItem;
