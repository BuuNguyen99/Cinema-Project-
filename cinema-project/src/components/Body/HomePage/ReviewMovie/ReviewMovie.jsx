import React, { Component } from 'react';
import "./ReviewMovie.css"

class ReviewMovie extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className=" mr-3 link-wrapper">
                        <h4
                            className="link hover-1"
                            data-toggle="tab"
                            aria-expanded="true"
                        >
                            BÌNH LUẬN PHIM
                        </h4>
                    </div>
                </div>
                <div className="row mt-3 linkReivew">
                    <div className="col-5">
                        <a className="linkReviewMovie">
                            <img className="imgMovie" src="../image/endgame-indy-calendar.jpg" alt="anh" />
                        </a>
                    </div>
                    <div className="col-7">
                        <a className="linkReviewMovie">
                            <h5 className="title">[Review] END GAME: Bản anh hùng ca khép lại kỷ nguyên huy hoàng của Marvel</h5>
                        </a>
                        <div>
                            <button className="btn btn-primary mr-3"><i className="far fa-thumbs-up"></i> &nbsp; Thích 3</button>
                            <button className="btn btn-light ml-3 mr-3 viewReview"><i className="far fa-eye"></i>&nbsp;3250</button>
                            <span className="ml-3 mr-3"><i className="fas fa-star"></i>&nbsp;<span className="markReport">7.1</span> /10(40)</span>
                            <button className="ml-3 btn btn-warning">Đánh giá</button>
                        </div>
                        <p className="mt-3 contentReviewMovie">
                            181 phút ngập tràn cảm xúc của Avengers: Endgame đã không chỉ thỏa lòng mong đợi của các fan mà vượt qua sự kỳ vọng,
                            là kết tinh của một kỷ nguyên MCU không thể nào quên.
                        </p>
                    </div>
                </div>
                <div className="row mt-3 linkReivew">
                    <div className="col-5">
                        <a className="linkReviewMovie">
                            <img className="imgMovie" src="../image/OpenGraph-TW-1200x630.jpg" alt="anh" />
                        </a>
                    </div>
                    <div className="col-7">
                        <a className="linkReviewMovie">
                            <h5 className="title">[Review] END GAME: Bản anh hùng ca khép lại kỷ nguyên huy hoàng của Marvel</h5>
                        </a>
                        <div>
                            <button className="btn btn-primary mr-3"><i className="far fa-thumbs-up"></i> &nbsp; Thích 3</button>
                            <button className="btn btn-light ml-3 mr-3 viewReview"><i className="far fa-eye"></i>&nbsp;3250</button>
                            <span className="ml-3 mr-3"><i className="fas fa-star"></i>&nbsp;<span className="markReport">7.1</span> /10(40)</span>
                            <button className="ml-3 btn btn-warning">Đánh giá</button>
                        </div>
                        <p className="mt-3 contentReviewMovie">
                            181 phút ngập tràn cảm xúc của Avengers: Endgame đã không chỉ thỏa lòng mong đợi của các fan mà vượt qua sự kỳ vọng,
                            là kết tinh của một kỷ nguyên MCU không thể nào quên.
                        </p>
                    </div>
                </div>
                <div className="row mt-3 linkReivew">
                    <div className="col-5">
                        <a className="linkReviewMovie">
                            <img className="imgMovie" src="../image/180319-marvel-infinity-wars-mn-1615_2d0cdb910365885c400e91e3b35eaaec.nbcnews-fp-1200-630.jpg" alt="anh" />
                        </a>
                    </div>
                    <div className="col-7">
                        <a className="linkReviewMovie">
                            <h5 className="title">[Review] END GAME: Bản anh hùng ca khép lại kỷ nguyên huy hoàng của Marvel</h5>
                        </a>
                        <div>
                            <button className="btn btn-primary mr-3"><i className="far fa-thumbs-up"></i> &nbsp; Thích 3</button>
                            <button className="btn btn-light ml-3 mr-3 viewReview"><i className="far fa-eye"></i>&nbsp;3250</button>
                            <span className="ml-3 mr-3"><i className="fas fa-star"></i>&nbsp;<span className="markReport">7.1</span> /10(40)</span>
                            <button className="ml-3 btn btn-warning">Đánh giá</button>
                        </div>
                        <p className="mt-3 contentReviewMovie">
                            181 phút ngập tràn cảm xúc của Avengers: Endgame đã không chỉ thỏa lòng mong đợi của các fan mà vượt qua sự kỳ vọng,
                            là kết tinh của một kỷ nguyên MCU không thể nào quên.
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReviewMovie;