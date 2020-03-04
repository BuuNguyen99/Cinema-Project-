import React, { Component } from "react";
import "./StyleNavigation.css";

class Navigation extends Component {
  render() {
    return (
      <div class="containerFluid">
        <div className="container navigation">
          <ul className="nav">
            <li>
              <a className="text-uppercase" href="#">
                mua vé
              </a>
            </li>
            <li>
              <a className="text-uppercase" href="#">
                phim
              </a>
              <ul class="sub-menu">
                <li>
                  <a className="text-uppercase" href="#">
                    phim đang chiếu
                  </a>
                </li>
                <li>
                  <a className="text-uppercase" href="#">
                    phim sắp chiếu
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-uppercase" href="#">
                góc điện ảnh
              </a>
              <ul class="sub-menu">
                <li>
                  <a className="text-uppercase" href="#">
                    thể loại phim
                  </a>
                </li>
                <li>
                  <a className="text-uppercase" href="#">
                    diễn viên
                  </a>
                </li>
                <li>
                  <a className="text-uppercase" href="#">
                    đạo diễn
                  </a>
                </li>
                <li>
                  <a className="text-uppercase" href="#">
                    bình luận phim
                  </a>
                </li>
                <li>
                  <a className="text-uppercase" href="#">
                    blog điện ảnh
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a className="text-uppercase" href="#">
                Sự kiện
              </a>
            </li>
            <li>
              <a className="text-uppercase" href="#">
                rạp/ giá vé
              </a>
            </li>
            <li>
              <a className="text-uppercase" href="#">
                hỗ trợ
              </a>
            </li>
            <li>
              <a className="text-uppercase" href="#">
                thành viên
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navigation;
