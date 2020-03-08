import React, { Component } from "react";
import "./StyleNavigation.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuExpand: '',
      isExpand: false
    };
  }

  handleClickMenu = (menu) => {
    this.setState(prevState => ({
        menuExpand: menu,
        isExpand: prevState.menuExpand !== menu ? true : false
    }));
  };

  render() {
    const showMenu = this.props.style;
    console.log('showMenu:', showMenu)
    const { menuExpand, isExpand } = this.state
    const isExpand1 = 'menu1' == menuExpand && isExpand ? true : false;
    const isExpand2 = 'menu2' == menuExpand && isExpand ? true : false;
    const styleMenu1 = isExpand1 ? 'show' : '';
    const styleMenu2 = isExpand2 ? 'show' : ''

    return (
      <div className={`${showMenu}`}>
        <nav className={` wrap-nav-c navbar navbar-expand-md navbar-dark`}>
          <div className="container-c container">
            <div
              className="nav collapse navbar-collapse show"
              id="navbarResponsive">
              <ul className=" navbar-c navbar-nav">
                <li className="nav-item-c nav-item">
                  <a
                    className="nav-link-c text-uppercase nav-link"
                    href="about.html">
                    Mua vé
                  </a>
                </li>
                
                <li onClick={() => this.handleClickMenu('menu1')} className={`nav-item-c nav-item dropdown ${styleMenu1}`}>
                  <a
                    className="nav-link-c text-uppercase nav-link dropdown-toggle"
                    id="navbarDropdownPortfolio"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={isExpand1}>
                    Phim
                  </a>
                  <div
                    className={`dropdown-c dropdown-menu dropdown-menu-right ${styleMenu1}`}
                    aria-labelledby="navbarDropdownPortfolio">
                    <a
                      className="nav-link-sub text-uppercase dropdown-item"
                      href="portfolio-1-col.html">
                      Phim đang chiếu
                    </a>
                    <a
                      className="nav-link-sub text-uppercase dropdown-item"
                      href="portfolio-2-col.html">
                      Phim sắp chiếu
                    </a>
                  </div>
                </li>
                
                <li onClick={()=> this.handleClickMenu('menu2')} className={`nav-item-c nav-item dropdown ${styleMenu2}`}>
                  <a
                    className="nav-link-c text-uppercase nav-link dropdown-toggle"
                    id="navbarDropdownPortfolio"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={isExpand2}>
                    Góc điện ảnh
                  </a>
                  <div
                    className={`dropdown-c dropdown-menu dropdown-menu-right ${styleMenu2}`}
                    aria-labelledby="navbarDropdownPortfolio">
                    <a
                      className="nav-link-sub text-uppercase dropdown-item"
                      href="portfolio-1-col.html">
                      thể loại phim
                    </a>
                    <a
                      className="nav-link-sub text-uppercase dropdown-item"
                      href="portfolio-2-col.html">
                      diễn viên
                    </a>
                    <a
                      className="nav-link-sub text-uppercase dropdown-item"
                      href="portfolio-2-col.html">
                      đạo diễn
                    </a>
                    <a
                      className="nav-link-sub text-uppercase dropdown-item"
                      href="portfolio-2-col.html">
                      bình luận phim
                    </a>
                    <a
                      className="nav-link-sub text-uppercase dropdown-item"
                      href="portfolio-2-col.html">
                      blog điện ảnh
                    </a>
                  </div>
                </li>
                
                <li className="nav-item-c nav-item">
                  <a
                    className="nav-link-c text-uppercase nav-link"
                    href="services.html">
                    sự kiện
                  </a>
                </li>

                <li className="nav-item-c nav-item">
                  <a
                    className="nav-link-c text-uppercase nav-link"
                    href="contact.html">
                    Rạp/giá vé
                  </a>
                </li>

                <li className="nav-item-c nav-item">
                  <a
                    className="nav-link-c text-uppercase nav-link"
                    href="contact.html">
                    Hỗ trợ
                  </a>
                </li>

                <li className="nav-item-c nav-item">
                  <a
                    className="nav-link-c text-uppercase nav-link"
                    href="contact.html">
                    Thành viên
                  </a>
                </li>
              </ul>
          </div>
          </div>
        </nav>
      </div>
    );
  }}

  export default Navigation