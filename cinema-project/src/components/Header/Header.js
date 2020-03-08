import React, { Component } from 'react';
import './styleHeader.css';
import Login from './Login';
import Register from './Register';
import Navigation from '../Navigation/Navigation';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      openMenu: false,
      openSearch: false
    };
  }
  renderNavigation = () => {
    console.log('render');
    // let xhtml = null;
    // if(this.state.open) {
    console.log('true');
    let xhtml = (
      <div className="containerNav containerFluid">
        <nav className="container navigation">
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
              <ul className="sub-menu">
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
                thanh vien
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );

    //}
    return xhtml;
  };

  handleToggleMenu() {
    this.setState({
      openMenu: !this.state.openMenu
    });
    if (this.state.openSearch) {
      this.setState({
        openSearch: !this.state.openSearch
      });
    }
  }

  handleToggleSearch() {
    this.setState({
      openSearch: !this.state.openSearch
    });
    if (this.state.openMenu) {
      this.setState({
        openMenu: !this.state.openMenu
      });
    }
  }

  render() {
    let showMenu = this.state.openMenu ? 'showMenu' : 'hideMenu';
    let showSearch = this.state.openSearch ? 'showSearch' : 'hideSearch';
    return (
      <div className="wrapper-header">
        <div className=" container-fluid">
          <div className="container">
            <div className="wrap-header row d-flex align-items-center py-3">
              <div className="col-4">
                <a href="#">
                  <img
                    className="imageLogo"
                    src="https://www.galaxycine.vn/website/images/galaxy-logo.png"
                    alt="logo"></img>
                </a>
              </div>
              <div className="col-8 text-right text-secondary">
                <Login /> <span>/</span> <Register />
              </div>
            </div>
          </div>
        </div>

        {/* menu mobile */}
        <div className={`skip-links`}>
          <span
            className="skip-links-item"
            onClick={this.handleToggleMenu.bind(this)}>
            <a className="linkItem">
              <span className="icon">
                <span>
                  <i className="fas fa-bars"></i>
                </span>
              </span>
              <span className="label">Menu</span>
            </a>
          </span>
          <span
            className="skip-links-item"
            onClick={this.handleToggleSearch.bind(this)}>
            <a href="#" className=" linkItem skip-link skip-search">
              <span className="icon">
                <span>
                  <i className="fas fa-search"></i>
                </span>
              </span>
              <span className="label">Tìm kiếm</span>
            </a>
          </span>
        </div>

        <Navigation style={showMenu} />

        <div className={`${showSearch} find-header`}>
          <input
            className="form-control mx-auto"
            placeholder="Tìm tên phim, diễn viên..."></input>
        </div>
      </div>
    );
  }
}

export default Header;
