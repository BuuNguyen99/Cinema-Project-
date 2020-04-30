import React, { Component } from 'react';
import ItemReviewMovie from "./ItemReviewMovie";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { actFetchDataReviewMovieRequest } from '../../../actions/action';
import "./ReviewMovie.css"

class ReviewMovie extends Component {
    componentDidMount() {
        this.props.onFetchDataReviewMovie();
      }
    render() {
        let linksStyle = {
            color: "black",
            textTransform: "uppercase",
            fontSize: "18px"
          };

          let dataItemReviewMovie = this.props.reviewMovie.map((reviewMovie, index) => {
            return <ItemReviewMovie key={`reviewMovie ${index}`} reviewMovie={reviewMovie} />;
          });
        return (
            <div className="container">
                <div className="row mt-3">
          <div className="col-md-12">
            <Link to="/review-film">
            <p
              className="link hover-2"
              href="#tab_default_1"
              data-toggle="tab"
              aria-expanded="true"
              style={linksStyle}
            >
              Bình Luận Phim
            </p>
            </Link>
          </div>
        </div>
                {dataItemReviewMovie}
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        reviewMovie: state.reducerMovie.reviewMovie,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      onFetchDataReviewMovie: () => {
        dispatch(actFetchDataReviewMovieRequest());
      },
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(ReviewMovie);
