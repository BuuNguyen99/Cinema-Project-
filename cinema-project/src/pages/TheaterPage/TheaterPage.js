import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./TheaterPage.css";
import CarouselTheater from "./CarouselTheater";
import { connect } from "react-redux";
import { actFetchDataTheaterRequest } from "../../actions/action";

class TheaterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      setImage: "https://galaxycine.vn/media/2019/8/30/banggiave-cm-082019-2d_1567135206319.jpg",
    };
  }

  changeImage2D = (ticket2d) => {
    this.setState({
      setImage: ticket2d,
    });
  };

  changeImage3D = (ticket3d) => {
    this.setState({
      setImage: ticket3d,
    });
  };
  componentDidMount() {
    this.props.onFetchDataTheater();
  }
  render() {
    let color = {
      color: "#b9b9b9",
    };
    let linksStyle = {
      fontSize: "18px",
      color: "black",
      textTransform: "uppercase",
    };

    return (
      <div className="container my-4">
        <div className="row my-5">
          <div className="col-md-12">
            <span>
              <Link to="/" href="#" title="trang chủ " className="links">
                Trang Chủ
              </Link>
              <span style={color}> > </span>
              <Link to="/" href="#" title="thành viên" className="links">
                Rạp chiếu phim
              </Link>
              <span style={color}> ></span>
              <span> R H Y Cinema</span>
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <CarouselTheater />
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <p
              className="link hover-2"
              href="#tab_default_1"
              data-toggle="tab"
              aria-expanded="true"
              style={linksStyle}
            >
              giá vé
            </p>
          </div>
          <div className="col-md-12">
            <button
              type="button"
              className="btn btn-outline-info mr-4"
              onClick={() => this.changeImage2D(this.props.theater.ticket2d)}
            >
              2D
            </button>
            <button
              type="button"
              className="btn btn-outline-info"
              onClick={() => this.changeImage3D(this.props.theater.ticket3d)}
            >
              3D
            </button>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-8">
            <img src={this.state.setImage} className="image" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-12">
            <p
              className="link hover-2"
              href="#tab_default_1"
              data-toggle="tab"
              aria-expanded="true"
              style={linksStyle}
            >
              Thông tin chi tiết
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <span style={color}> Địa chỉ:</span>{" "}
            <span>
              {this.props.theater.address}
            </span>
          </div>
          <div className="col-md-12">
            <span style={color}> Số điện thoại:</span> <span>  {this.props.theater.phone} </span>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-12">
            <div className="map-responsive">
              <iframe
                className="map"
                src= {this.props.theater.addressMap}
                height="450"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="row mt-3 mb-4">
          <div className="col-md-12">
            <p>
              Tọa lạc tại vị trí đắc địa là lầu 2 TTTM Sense City Cà Mau, cụm
              rạp thứ 8 của Galaxy Cinema có đến 6 phòng chiếu hiện đại với hai
              định dạng 2D và 3D, được xây dựng theo tiêu chuẩn quốc tế cùng hệ
              thống âm thanh vòm Dolby 7.1 giúp những bộ phim hay chất lượng tốt
              nhất. Ngoài ra, là một thương hiệu đến từ TPHCM, Galaxy Cinema còn
              “ghi điểm” ở không gian trẻ trung, dịch vụ thân thiện. Đặc biệt,
              mức giá vô cùng “kinh tế” cũng là một ưu điểm bạn không thể bỏ
              qua. Sự xuất hiện của Galaxy Cà Mau sẽ giúp người dân đất mũi có
              thêm nhiều lựa chọn vui chơi giải trí. Chắc chắn rằng, việc thưởng
              thức các phim mới trong nước và quốc tế cùng bạn bè hay người yêu
              sẽ là một trải nghiệm hết sức tuyệt vời.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    theater: state.reducerMovie.theater,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onFetchDataTheater: () => {
      dispatch(actFetchDataTheaterRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TheaterPage);
