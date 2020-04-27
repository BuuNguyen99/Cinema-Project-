import React from "react";
import "./MovieItem.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { addMovieInformationRequest } from "../../actions/action";

class MovieItem extends React.Component {
  onTicketBooking = (movie) => {
    this.props.handlerAddMovieInfo(movie);
  };

  render() {
    let { movie } = this.props;
    return (
      <div className="col-lg-4 col-md-6 col-sm-6 p-2 mt-2">
        <div className="box">
          <img src={movie.image} />
          <div className="box-content">
            <h6 className="title">{movie.name}</h6>
            <span className="post">{movie.type}</span>
            <ul className="icon">
              <li>
                <a href="#" className="mt-3">
                  <Link to="/ticket-booking">
                    <i
                      className="fas fa-shopping-cart"
                      onClick={() => this.onTicketBooking(movie)}
                    ></i>
                  </Link>
                </a>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  handlerAddMovieInfo: (movie) => dispatch(addMovieInformationRequest(movie)),
});

export default connect(null, mapDispatchToProps)(MovieItem);
