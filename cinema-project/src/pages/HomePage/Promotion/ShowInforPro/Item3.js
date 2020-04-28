import React, { Component } from "react";
import { Link } from "react-router-dom";

class Item3 extends Component {
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
              Bắt Kịp Thời Đại 4.0: Bye Bye Thẻ Thành Viên Nhựa
            </p>
          </div>
        </div>
        <div className="row my-2">
          <div className="col-md-12">
            <p>
              {" "}
              <strong>QUÁ BẤT TIỆN</strong> khi dùng thẻ thành viên bằng nhựa!!!
            </p>
            <ul>
              <li className="mt-3">
                Ví tiền của bạn dày cồm cộm vì quá nhiều thể loại thẻ nhựa.
              </li>
              <li className="mt-3">Lỡ quên thẻ thì không đổi được quà.</li>
              <li className="mt-3">
                Tệ hơn, mất thẻ thì phải tốn phí 20K làm lại thẻ mới.
              </li>
              <li className="mt-3">
                {" "}
                Tệ hơn nữa, thẻ nhựa <strong>không thân thiện</strong> với môi
                trường…
              </li>
            </ul>
            <p>
              Dùng ngay <strong> ỨNG DỤNG R H Y</strong> tích điểm đổi quà thay
              cho thẻ thành viên!!!
            </p>
            <p>
              Giờ đây, khi đến <strong>R H Y Cinema</strong>, bạn không cần thẻ
              nhựa rườm rà nữa! Mọi thao tác đều được đơn giản hóa chỉ với một
              chiếc điện thoại di động thông minh (smartphone). Ai mà chẳng có
              smartphone đúng không?
            </p>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-2 col-lg-2"></div>
          <div className="col-md-8 col-lg-8">
            <img
              src="https://www.galaxycine.vn/media/2019/10/11/1135x660_1570766710619.jpg"
              style={width}
            />
          </div>
          <div className="col-md-2 col-lg-2"></div>
        </div>
        <div className="row mt-5 mb-3">
          <div className="col-md-12 col-lg-12">
            <p>Bước 1: Tải ngay app <strong>R H Y Cinema.</strong></p>
            <p>Bước 2: Đăng nhập ap <strong>R H Y Cinema.</strong></p>
            <p>Bước 3: Sử dụng barcode để Tích Điểm hoặc Đổi Quà.</p>
            <p>
              Nhanh chóng, dễ dàng và tiện lợi, sử dụng app là cách đơn giản
              nhất để không bỏ lỡ bất kỳ ưu đãi nào từ <strong>R H Y Cinema.</strong>
            </p>
            <p>App <strong>R H Y Cinema.</strong> trên iOS: https://apple.co/2JA4sDl</p>
            <p>App <strong>R H Y Cinema.</strong> trên Android: https://bit.ly/2N6LjLx</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item3;
