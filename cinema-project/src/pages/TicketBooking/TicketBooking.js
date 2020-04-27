import React, { Component } from "react";
import "./TicketBooking.css";
import { connect } from "react-redux";
import MovieInfo from "./MovieInformation/MovieInfo";


class TicketBooking extends Component {

  render() {
    let { itemMovieInfo } = this.props;    

    
    let ItemMovie = itemMovieInfo.map((itemMovieInfo, index) => {
      return <MovieInfo key={`movie ${index}`} itemMovieInfo={itemMovieInfo} />;
    });
    return <div className="container my-4">{ItemMovie}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    itemMovieInfo: state.reducerMovie.showInfoMovie,
  };
};


export default connect(mapStateToProps, null)(TicketBooking);
