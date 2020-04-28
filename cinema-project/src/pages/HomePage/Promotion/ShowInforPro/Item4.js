import React, { Component } from "react";
import { Link } from "react-router-dom";

class Item4 extends Component {
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
            <p style={fontSize}>Đặt Vé Online - Không Lo Trễ Nải</p>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <p>
              Ghét đông đúc ồn ào? Lười xếp hàng mua vé? Hãy quên đi cách mua vé
              giấy truyền thống tốn thời gian hay xếp hàng lấy vé đặt online
              phiền toái. Giờ đây, chỉ với một thao tác nhỏ là các Stars có thể
              đến thẳng phòng chiếu xem phim ngay lập tức.
            </p>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-2 col-lg-2"></div>
          <div className="col-md-8 col-lg-8">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe
                className="embed-responsive-item"
                src="https://www.youtube.com/embed/DzZ0VZAxpQM?autoplay=1"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div className="col-md-2 col-lg-2"></div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12">
            <p>
              Bỏ sau đầu những nỗi lo như đến trễ, chen lấn vào giờ cao điểm hay
              tệ hơn là mất vé, từ nay các Stars đã có{" "}
              <strong>Một Bước Vào Rạp</strong> của
              <strong> R H Y Cinema</strong>. Hãy đặt vé ngay chỉ với các bước
              đơn giản sau đây.
            </p>
          </div>
        </div>
        <div className="row my-3">
          <div className="col-md-2 col-lg-2"></div>
          <div className="col-md-8 col-lg-8">
            <img
              src="https://www.galaxycine.vn/media/wysiwyg/images/1135%284%29.jpg"
              style={width}
            />
          </div>
          <div className="col-md-2 col-lg-2"></div>
        </div>
        <div className="row my-5">
          <div className="col-md-12">
            <p>
              Bước 1: Đặt vé online tại trang web hoặc app{" "}
              <strong> R H Y Cinema</strong>
            </p>
            <p>
              Bước 2: Kiểm tra mail, chụp hình mã QR (Đối với giao dịch qua app
              <strong> R H Y Cinema</strong>, bạn có thể chụp lại mã QR ngay sau
              giao dịch thành công.)
            </p>
            <p>
              Bước 3: Quét mã QR vào thẳng phòng chiếu, không cần lấy vé giấy
              như hiện tại.
            </p>
            <p>Quá tiện lợi đúng không các Stars ?</p>
            <p>
              {" "}
              Hệ thống <strong>Một Bước Vào Rạp</strong> vẫn sẽ được sử dụng
              song song với hình thức nhận vé giấy hiện tại. Từ nay, thoải mái
              lựa chọn phương thức mua vé phù hợp nhất với mình các Stars nhé.
              Tuy nhiên, <strong> R H Y Cinema</strong> tin rằng bạn sẽ thích
              ngay sau một lần trải nghiệm sự tiện lợi của việc vào thẳng phòng
              chiếu mà không phải xếp hàng chờ đợi bằng hình thức mua vé online
              và <strong>Quét QR code.</strong>
            </p>
            <p>
              Nhanh chân đến ngay <strong> R H Y Cinema</strong> để trải nghiệm <strong>Một Bước Vào Rạp</strong>
              đến thẳng phòng chiếu và tận hưởng phong cách xem phim hiện đại
              nào!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Item4;
