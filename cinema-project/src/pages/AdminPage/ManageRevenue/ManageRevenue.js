import React, { Component } from "react";
import ChartMonth from "./ChartMonth";
import { connect } from "react-redux";
import { actFetchDataBookingMovieRequest } from "../../../actions/action";
import moment from "moment";

class ManageRevenue extends Component {
  componentDidMount() {
    this.props.onFetchBookingMovie();
  }
  render() {
    let { bookingMovie } = this.props;
    if (Object.keys(bookingMovie).length !== 0) {
      localStorage.setItem("bookingMovie", JSON.stringify(bookingMovie));
    } else {
      bookingMovie = JSON.parse(localStorage.getItem("bookingMovie"));
    }
    let Data = [
      {
        id: 0,
        name: "Tháng 1",
        total: 0,
      },
      {
        id: 1,
        name: "Tháng 2",
        total: 0,
      },
      {
        id: 2,
        name: "Tháng 3",
        total: 0,
      },
      {
        id: 3,
        name: "Tháng 4",
        total: 0,
      },
      {
        id: 4,
        name: "Tháng 5",
        total: 0,
      },
      {
        id: 5,
        name: "Tháng 6",
        total: 0,
      },
      {
        id: 6,
        name: "Tháng 7",
        total: 0,
      },
      {
        id: 7,
        name: "Tháng 8",
        total: 0,
      },
      {
        id: 8,
        name: "Tháng 9",
        total: 0,
      },
      {
        id: 9,
        name: "Tháng 10",
        total: 0,
      },
      {
        id: 10,
        name: "Tháng 11",
        total: 0,
      },
      {
        id: 11,
        name: "Tháng 12",
        total: 0,
      }
    ];
    for ( let i = 0; i < bookingMovie.length ; i++) {
      var date = bookingMovie[i].date;
      var birth = moment(date).format("MM/DD/YYYY");
      var getMonth = new Date(birth);
      var month = getMonth.getMonth();
      for(let j = 0 ; j < Data.length ; j++ ) {
        if (month === Data[j].id) {
          Data[j].total += (bookingMovie[i].ticketPrice + bookingMovie[i].foodPrice );
        }
      }
    }
    console.log(Data);
    return (
      <div style={{ minHeight: "70vh" }} className="container my-4">
        <ChartMonth Data = { Data }/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bookingMovie: state.reducerMovie.bookingMovie,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchBookingMovie: () => {
      dispatch(actFetchDataBookingMovieRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageRevenue);
