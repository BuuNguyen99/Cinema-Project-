import React, { Component } from "react";
import { Link } from "react-router-dom";
import OpenVideo from "../OpenVideoMovie/OpenVideo";
import Rating from "material-ui-rating";
import ShowTimesMovie from "../ShowTimesMovie/ShowTimesMovie";
import { actRatingItemMovieRequest } from "../../../actions/action";
import { connect } from "react-redux";
import moment from 'moment'

class MovieInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showRating: false,
    };
  }

  onRating = () => {
    if(this.state.showRating === false){
      this.setState ({
        showRating: true
      })
    }
    console.log(this.state.showRating);
    
    
  };

  onChangeRating = (value, movie) => {
    console.log(`Rated with value ${value}`);
    let rate = parseFloat(movie.vote.rate);
    let number = parseInt(movie.vote.numberOfReviews) + 1;
    let vote;
    rate = rate * movie.vote.numberOfReviews;
    vote = (rate + value) / number;
    vote = Math.round(vote * 100) / 100;
    console.log(vote);
    movie.vote.rate = vote.toString();
    movie.vote.numberOfReviews = number.toString();
    this.props.onUpdateRatingItemMovie(movie);
    alert(`Bạn đã đánh giá ${value}`);
  };
  render() {
    let color = {
      color: "#b9b9b9",
    };
    let colorIcon = {
      color: "rgb(255, 152, 0)",
    };
    let linksStyle = {
      color: "black",
      textTransform: "uppercase",
      fontSize: "18px",
    };
    let showRatingHide = {
      display: "none"
    }
    let showRatingUp = {
      display: "block"
    }


    let { itemMovieInfo, account } = this.props;
    let dataDateMovie = itemMovieInfo.date.map((date, index) => {
      return <ShowTimesMovie key={`date ${index}`} date={date} itemMovieInfo={itemMovieInfo} account={account} />;
    });

    return (
      <div className="container my-4">
        <div className="row">
          <div className="col-md-12">
            <span>
              <Link to="/">
                <a href="#" title="trang chủ " className="links">
                  Trang Chủ
                </a>
              </Link>
              <span style={color}> > </span>
              <Link to="/">
                <a href="#" title="Đặt vé" className="links">
                  Đặt vé
                </a>
              </Link>
              <span style={color}> ></span>{" "}
              <span className="text-uppercase"> {itemMovieInfo.name} </span>
            </span>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12 col-lg-5 img">
            <div className="default-img">
              <img
                src={itemMovieInfo.imageInfo}
                class="loading"
                data-was-processed="true"
              />
            </div>
            <div className="play-bt">
              <OpenVideo info={itemMovieInfo} />
            </div>
          </div>
          <div className="col-md-12 col-lg-7 movie-information">
            <h4 class="detail-title text-uppercase">{itemMovieInfo.name}</h4>
            <div className="rating mt-3">
              <i
                class="fas fa-star align-self-center mr-1"
                style={colorIcon}
              ></i>
              <span className="align-self-center mr-2">
                {itemMovieInfo.vote.rate} /10
              </span>
              <span className="align-self-center mr-2">
               ( {itemMovieInfo.vote.numberOfReviews} )
              </span>
              <button
                type="button"
                class="btn btn-outline-info btn-sm"
                onClick={() => this.onRating()}
              >
                ĐÁNH GIÁ
              </button>
              <Rating
                style={ this.state.showRating ? showRatingUp : showRatingHide}
                value={0}
                max={10}
                precision={0.5}
                onChange={(value) => this.onChangeRating(value, itemMovieInfo)}
              />
            </div>
            <div className="rating mt-3">
              <span>
                <i className="far fa-clock"></i> {itemMovieInfo.time}
              </span>
            </div>
            <div className="detail-info mt-3">
              <div className="detail-info-row">
                <span className='font-weight-bold'>Diễn viên:&nbsp;</span>
                <div className="detail-info-right">
                  {itemMovieInfo.actor}
                </div>
              </div>
              <div className="detail-info-row">
                <span className='font-weight-bold'>Thể loại:&nbsp;</span>
                <div className="detail-info-right">
                   {itemMovieInfo.type}
                </div>
              </div>
              <div className="detail-info-row">
                <span className='font-weight-bold'>Quốc gia:&nbsp;</span>
                <div class="detail-info-right">
                  {itemMovieInfo.nation}
                </div>
              </div>
              <div class="detail-info-row">
                <span className='font-weight-bold'>Nhà sản xuất:&nbsp;</span>
                <div class="detail-info-right">
                  {itemMovieInfo.author}
                </div>
              </div>
              <div class="detail-info-row">
                <span className='font-weight-bold'>Ngày:&nbsp;</span>
                <div class="detail-info-right">{moment(itemMovieInfo.premiereDate).format('LL')}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="row pb-2">
          <div className="col-md-12">
            <div className="mt-3">
              <a
                className="link hover-2"
                href="#tab_default_1"
                data-toggle="tab"
                aria-expanded="true"
                style={linksStyle}
              >
                Nội dung phim
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-5">
            <p className="text">{itemMovieInfo.intro}</p>
          </div>
        </div>
        <div className="row pb-2">
          <div className="col-md-12">
            <div className="mt-3">
              <a
                className="link hover-2"
                href="#tab_default_1"
                data-toggle="tab"
                aria-expanded="true"
                style={linksStyle}
              >
                suất chiếu
              </a>
            </div>
          </div>
        </div>
        {dataDateMovie}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateRatingItemMovie: (movie) => {
      dispatch(actRatingItemMovieRequest(movie));
    },
  };
};

export default connect(null, mapDispatchToProps)(MovieInfo);
