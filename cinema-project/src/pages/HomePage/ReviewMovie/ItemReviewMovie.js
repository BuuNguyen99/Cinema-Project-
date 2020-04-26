import React, { Component } from "react";
import "./ItemReviewMovie.css";
class ItemReviewMovie extends Component {
  render() {
    let size = {
      width: "100%"
    };
    return (
      <div className="row mt-3 linkReivew">
        <div className="col-md-12 col-lg-5">
          <a className="linkReviewMovie">
            <img
              style={size}
              className="imgMovie"
              src="../image/endgame-indy-calendar.jpg"
              alt="anh"
            />
          </a>
        </div>
        <div className="col-md-12 col-lg-7">
          <a className="linkReviewMovie">
            <h5 className="title">
              [Review] END GAME: Bản anh hùng ca khép lại kỷ nguyên huy hoàng
              của Marvel
            </h5>
          </a>
          <div>
            <button className="btn btn-primary mr-3">
              <i class="far fa-thumbs-up"></i> &nbsp; Thích 3
            </button>
            <button className="btn btn-light ml-3 mr-3 viewReview">
              <i class="far fa-eye"></i>&nbsp;3250
            </button>
            <span className="ml-3 mr-3">
              <i class="fas fa-star"></i>&nbsp;
              <span className="markReport">7.1</span> /10(40)
            </span>
          </div>
          <p className="mt-3 contentReviewMovie">
            181 phút ngập tràn cảm xúc của Avengers: Endgame đã không chỉ thỏa
            lòng mong đợi của các fan mà vượt qua sự kỳ vọng, là kết tinh của
            một kỷ nguyên MCU không thể nào quên.
          </p>
        </div>
      </div>
    );
  }
}

export default ItemReviewMovie;
