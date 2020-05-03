import React, { Component } from "react";
import ReviewMovie from "../HomePage/ReviewMovie/ReviewMovie";

class EventPage extends Component {
  render() {
    let linksStyle = {
      fontSize: "18px",
      color: "black",
      textTransform: "uppercase",
    };
    return (
      <div className="container my-4">
        <ReviewMovie />
          <div className="row mt-3">
            <div className="col-md-12">
              <p
                className="link hover-2"
                href="#tab_default_1"
                data-toggle="tab"
                aria-expanded="true"
                style={linksStyle}
              >
                R H Y cinema
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <p>
                R H Y Cinema sẽ đăng tải những bài bình luận phim mới nhất,
                chân thật nhất, đánh giá chính xác về những bộ phim đang chiếu ở
                rạp chiếu bóng. Những bài viết phân tích điểm hay, dở, chất
                lượng nội dung, phong cách đạo diễn, diễn xuất diễn viên, nói ra
                những thông điệp ẩn giấu, giúp bạn có cái nhìn toàn diện và sâu
                sắc về bộ phim vừa theo dõi. Những bài bình luận sẽ trải dài ở
                đủ mọi thể loại hành động, tình cảm, lãng mạn, kinh dị... được
                viết bởi những cây bút có chuyên môn và kiến thức điện ảnh.
                Galaxy Cinema sẽ là nơi bạn tìm thấy những bài bình luận về các
                phim mới một cách nhanh và đầy đủ nhất.
              </p>
            </div>
          </div>
        </div>
    );
  }
}

export default EventPage;
