import React from "react";
import "./itemMovie.css";
import OpenVideo from "./OpenVideo";
class ItemMovie extends React.Component {
  
  render() {
    let { movie } = this.props;
    
    return (
      <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6 pl-0 pr-3 mt-3">
        <div className="box">
          <img src= {movie.image}/>
          <div className="box-content">
            <h6 className="title">{movie.name}</h6>
            <span className="post">{movie.type}</span>
            <ul className="icon">
              <li>
                <a href="#">
                  <i className="fa fa-search"></i>
                </a>
              </li>
              <li>
              </li>
            </ul>
          </div>
        </div>
        
      </div>
    );
  }
}
export default ItemMovie;
