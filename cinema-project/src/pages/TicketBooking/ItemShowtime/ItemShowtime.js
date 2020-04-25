import React, { Component } from "react";

class ItemShowtime extends Component {
  render() {
    return (
      <div className="col-3 col-md-2 col-lg-2">
        <p className="item">{this.props.frametime.time}</p>
      </div>
    );
  }
}

export default ItemShowtime;
