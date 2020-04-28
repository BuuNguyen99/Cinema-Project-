import React, { Component } from "react";
import { Link } from "react-router-dom";

class Item2 extends Component {
  render() {
    let color = {
      color: "#b9b9b9",
    };
    let fontSize = {
      fontSize: "25px",
    };
    let width = {
      width: "100%",
    };
    return (
      <div className="container">
        <div className="row my-4">
          <div className="col-md-12">
            <span>
              <Link to="/" href="#" title="trang chủ " className="links">
                Trang Chủ
              </Link>
              <span style={color}> > </span>
              <Link to="/" href="#" title="thành viên" className="links">
                Ưu đãi
              </Link>
              <span style={color}> ></span>
              <span> Khuyến mãi</span>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p style={fontSize}>
              Ngày Tri Ân Của RHY Cinema - Ngày Thứ Hai ĐẦU TIÊN Mỗi Tháng
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p>
              Từ lâu, chương trình <strong>Ngày Tri Ân</strong> Nhằm tạo điều kiện thuận lợi hơn
              cho các khách hàng thả ga xem phim đã trở nên quen thuộc với các
              khách hàng thân yêu của <strong>RHY Cinema</strong>
            </p>
            <p>
              Vậy là, ngày 02/03/2020, các Stars sẽ được xem phim thả ga với giá
              vé đồng nhất 45.000 đ cho tất cả các phim 2D. Ngoài ra, trong Ngày
              Tri Ân này, khách hàng còn được nhận một ưu đãi đặc biệt - thoải
              mái thưởng thức bắp nước khi được 01 lần Refill miễn phí với tất
              cả các phần bắp và nước ngọt dạng ly (Pepsi, 7Up, Mirinda
              Cam/Mirinda Sarsi), Lipton Trà Chanh 22oz và Combo đang bán tại
              rạp.
            </p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-2 col-lg-2"></div>
          <div className="col-md-8 col-lg-8">
            <img
              src="https://www.galaxycine.vn/media/2020/2/27/1135x660_1582773509378.jpg"
              style={width}
            />
          </div>
          <div className="col-md-2 col-lg-2"></div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <p>
              <strong>Điều kiện chương trình:</strong>
            </p>
            <ul>
              <li className="mt-3">
                Áp dụng cho ngày thứ 2 ĐẦU TIÊN của mỗi tháng
              </li>
              <li className="mt-3">
                Áp dụng cho mọi loại ghế  &amp; suất chiếu (Không áp dụng cho suất
                chiếu đặc biệt &amp; suất chiếu sớm)
              </li>
              <li className="mt-3">
                Trong mọi trường hợp, quyết định của Galaxy Cinema là quyết định
                cuối cùng
              </li>
              <li className="mt-3">
                {" "}
                Movie Voucher không áp dụng cho suất chiếu sớm (nếu có)
              </li>
            </ul>
            <p>
              Đừng bỏ lỡ Ngày Tri Ân tại <strong>RHY Cinema - Ngày thứ Hai ĐẦU TIÊN
              của mỗi tháng</strong>. Với Ngày Tri Ân, các Stars chắc chắn sẽ có thêm
              nhiều trải nghiệm tuyệt vời và một buổi xem phim thú vị tại Galaxy
              Cinema. <strong>Đặt vé ngay</strong> vào ngày 02/03/2020 này nhé!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item2;
