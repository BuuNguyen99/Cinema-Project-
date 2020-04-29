import React, { Component } from "react";
import "./TicketBooking.css";
import { connect } from "react-redux";
import MovieInfo from "./MovieInformation/MovieInfo";
import {	actFetchDataAccountRequest } from "../../actions/action";


class TicketBooking extends Component {
  componentDidMount() {
		this.props.fetchDataAccount();
	}
  render() {
    let { itemMovieInfo, account } = this.props;    
    if (Object.keys(itemMovieInfo).length !== 0) {
			localStorage.setItem("movie", JSON.stringify(itemMovieInfo));
		} else {
			itemMovieInfo = JSON.parse(localStorage.getItem("movie"));
    }
    
    if (Object.keys(account).length !== 0) {
			localStorage.setItem("account", JSON.stringify(account));
		} else {
			account = JSON.parse(localStorage.getItem("account"));
    }

    let ItemMovie = itemMovieInfo.map((itemMovieInfo, index) => {
      return <MovieInfo key={`movie ${index}`} itemMovieInfo={itemMovieInfo} account={account}/>;
    });
    return <div className="container my-4">{ItemMovie}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    itemMovieInfo: state.reducerMovie.showInfoMovie,
    account: state.reducerUsers.account,
  };
};

const mapDispatchToProps = (dispatch) => {
	return {
		fetchDataAccount: () => {
			dispatch(actFetchDataAccountRequest());
		},
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(TicketBooking);
