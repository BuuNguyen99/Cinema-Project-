import React, { Component } from "react";
import Pro from "../HomePage/Promotion/Pro";

class EventPage extends Component {
  render() {
    let linksStyle = {
      fontSize: "18px",
      color: "black",
      textTransform: "uppercase",
    };
    return (
      <div className="container my-4">
        <Pro />
        <div className="container">
          <div className="row">
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
              Khuyến mãi mới sẽ bao gồm các bài viết giới thiệu những ưu đãi, khuyến mãi, quà tặng, vô cùng hấp dẫn cho khách hàng như giảm giá vé, tặng vé, tặng voucher, bốc thăm trúng thưởng... Truy cập vào khuyến mãi mới, bạn sẽ tìm thấy vô vàn lợi ích tuyệt vời và giá trị đến từ Galaxy cùng các đối tác.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EventPage;
