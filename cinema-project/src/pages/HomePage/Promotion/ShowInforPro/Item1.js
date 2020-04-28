import React, { Component } from "react";
import { Link } from "react-router-dom";

class Item1 extends Component {
  render() {
    let color = {
      color: "#b9b9b9",
    };
    let fontSize = {
      fontSize: "25px",
    };
    let fontSizei = {
      fontSize: "15px",
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
            <p style={fontSize}>TƯNG BỪNG HÁI "SAO" – NHẬN ƯU ĐÃI KHỦNG</p>
            <i style={fontSizei}>
              RHY Cinema ra mắt hệ thống tích điểm thành viên hoàn toàn mới!{" "}
            </i>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <p>
              Từ 31.12.2019, các Star{" "}
              <strong> sẽ được thăng hạng thành </strong> Star, G-star, X-star
              tương ứng với <strong> tổng chi tiêu trong năm 2019 </strong> và{" "}
              <strong>nhận các ưu đãi đặc biệt mới: </strong>{" "}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-2 col-lg-2"></div>
          <div className="col-md-8 col-lg-8">
            <img
              src="https://www.galaxycine.vn/media/2019/12/31/bangquyenloi_1577780325222.jpg"
              style={width}
            />
          </div>
          <div className="col-md-2 col-lg-2"></div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <p>
              Sau khi phân loại lại thành viên dựa trên tổng chi tiêu trong năm
              2019, <strong>mỗi khách hàng G-Star</strong> được tặng <strong>02 vé 2D miễn phí</strong> trong tài
              khoản và <strong>miễn phí đổi vị bắp</strong> từ ngày 01/01/2020; <strong>khách hàng X-Star</strong>
              được tặng <strong>04 vé 2D miễn phí</strong> trong tài khoản và miễn phí đổi vị bắp
              từ ngày 01/01/2020.
            </p>
            <p>
              Thành viên mua bất kỳ sản phẩm vé xem phim, nước uống, thức ăn,
              combo … tại các cụm rạp Galaxy hoặc thanh toán trực tuyến sẽ được
              tích lũy điểm thưởng tương ứng vào tài khoản Xem thêm tại:
            </p>
            <p>
              Lưu ý: Đối với những giao dịch trực tuyến, thành viên phải đăng
              nhập vào tài khoản mới được quyền tích điểm hợp lệ.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-12">
            <strong>Đổi quà hấp dẫn:</strong>
          </div>
          <div className="col-md-2 col-lg-2"></div>
          <div className="col-md-8 col-lg-8 mt-3">
            <img
              src="https://www.galaxycine.vn/media/2019/12/30/cs-doi-qua_1577691054615.jpg"
              style={width}
            />
          </div>
          <div className="col-md-2 col-lg-2"></div>
        </div>
        <div className="row my-3">
          <div className="col-md-12 col-lg-12 mt-4">
            <p>
              {" "}
              <strong>Lưu ý:</strong>{" "}
            </p>
          </div>
          <div className="col-md-12 col-lg-12">
            <p>
              Điểm tích lũy còn tồn đọng sẽ bị trừ khỏi tài khoản thành viên sau
              ngày 31/12/2019
            </p>
            <p>
              <strong>Thông tin định danh thành viên gồm</strong> có{" "}
              <strong>email</strong> và <strong>số điện thoại</strong> bắt buộc
              phải hợp lệ.
            </p>
            <p>
              <strong>Email không hợp lệ</strong> là email không có thực tại
              thời điểm Galaxy Cinema rà soát dữ liệu thành viên.
            </p>
            <p>
              <strong>Số điện thoại không hợp lệ</strong> là số điện thoại không
              liên lạc được hoặc số điện thoại không thuộc sở hữu của chủ tài
              khoản thành viên ở thời điểm Galaxy Cinema rà soát dữ liệu thành
              viên.
            </p>
            <p>
              Với các trường hợp không hợp lệ, Galaxy Cinema có quyền xóa tài
              khoản thành viên mà không cần thông báo trước.
            </p>
            <p>
              Tài khoản thành viên không có đủ thông tin định danh gồm{" "}
              <strong>email</strong> và <strong>số điện thoại hợp lệ</strong>,
              Galaxy Cinema có quyền xóa tài khoản thành viên mà không cần thông
              báo trước.
            </p>
            <p>
              Điểm tích lũy có giá trị áp dụng tại tất cả các rạp Galaxy Cinema
              trên toàn quốc.
            </p>
            <p>
              Bạn có thể dễ dàng kiểm tra điểm tích lũy của mình trên Website
              Galaxy Cinema hoặc Ứng dụng GLX trên điện thoại (Mobile App).
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item1;
