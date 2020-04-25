import React, { Component } from "react";
import "./ShowTimesMovie.css";
import ItemShowtime from "../ItemShowtime/ItemShowtime";

class ShowTimesMovie extends Component {
  render() {
    let { date} = this.props;

    let dataShowtime = date.frametime.map((frametime, index) => {
        return <ItemShowtime key={`movieee ${index}`} frametime={frametime}/>;
      });
    return (
      <div className="row mt-5">
        <div className="col-md-10 col-lg-10">
          <div className="detail-row">
            <div className="detail-title-showtime">
              <p className="title-showtime">{this.props.date.datemovie}</p>
            </div>
            <div className="detail-showtime ">
              <div className="detail-showtime-item row">
                {dataShowtime}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShowTimesMovie;
