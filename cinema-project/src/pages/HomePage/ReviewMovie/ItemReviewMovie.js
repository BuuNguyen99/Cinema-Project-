import React, { Component } from "react";
import "./ItemReviewMovie.css";
import Rating from "material-ui-rating";
import { connect } from "react-redux";
import { actRatingItemReviewMovieRequest } from "../../../actions/action";
import { Link } from "react-router-dom";

class ItemReviewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRating: false,
      rate: props.reviewMovie.vote.rate,
      number: props.reviewMovie.vote.numberOfReviews,
    };
  }
  onRating = () => {
    if (this.state.showRating === false) {
      this.setState({
        showRating: true,
      });
    }
  };

  onChangeRating = (value, reviewMovie) => {
    console.log(`Rated with value ${value}`);
    let rate = parseFloat(reviewMovie.vote.rate);
    let number = parseInt(reviewMovie.vote.numberOfReviews) + 1;
    let vote;
    rate = rate * reviewMovie.vote.numberOfReviews;
    vote = (rate + value) / number;
    vote = Math.round(vote * 100) / 100;
    console.log(vote);
    reviewMovie.vote.rate = vote.toString();
    reviewMovie.vote.numberOfReviews = number.toString();
    this.props.onUpdateRatingItemMovie(reviewMovie);
    this.setState({
      rate: vote,
      number: number,
    });
    alert(`Bạn đã đánh giá ${value} sao`);
  };

  render() {
    let size = {
      width: "100%",
    };
    let showRatingHide = {
      display: "none",
    };
    let showRatingUp = {
      display: "block",
    };
    let colorIcon = {
      color: "rgb(255, 152, 0)",
    };

    let { reviewMovie } = this.props;
    return (
      <div className="row mt-3 linkReivew">
        <div className=" col-4 col-md-5 col-lg-4 col-xl-3">
          <Link to={`/${reviewMovie.id}`}>
            <a className="linkReviewMovie">
              <img
                style={size}
                className="imgMovie"
                src={reviewMovie.image}
                alt="anh"
              />
            </a>
          </Link>
        </div>
        <div className="col-8 col-md-7 col-lg-8 col-xl-9">
          <div className="row">
            <div className="col-md-12">
              <Link to={`/${reviewMovie.id}`}>
                <a className="linkReviewMovie">
                  <h5 className="title" >{reviewMovie.title}</h5>
                </a>
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="rating mt-2">
                <i
                  class="fas fa-star align-self-center mr-1"
                  style={colorIcon}
                ></i>
                <span className="align-self-center mr-2">
                  {this.state.rate} /10
                </span>
                <span className="align-self-center mr-2">
                  ( {this.state.number} )
                </span>
                <button
                  type="button"
                  class="btn btn-outline-info btn-sm"
                  onClick={() => this.onRating()}
                >
                  ĐÁNH GIÁ
                </button>
                <Rating
                  style={this.state.showRating ? showRatingUp : showRatingHide}
                  value={0}
                  max={10}
                  precision={0.5}
                  onChange={(value) => this.onChangeRating(value, reviewMovie)}
                />
              </div>
            </div>
          </div>
          <div className="row content">
            <div className="col-md-12">
              <p className="mt-3 contentReviewMovie">{reviewMovie.content}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateRatingItemMovie: (reviewMovie) => {
      dispatch(actRatingItemReviewMovieRequest(reviewMovie));
    },
  };
};

export default connect(null, mapDispatchToProps)(ItemReviewMovie);
