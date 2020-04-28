import React, { Component } from "react";
import "./StyleNavigation.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actFetchDataAccountRequest } from "../../actions/action";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuExpand: "",
      isExpand: false,
    };
  }

  componentDidMount() {
    this.props.onFetchDataAccountRequest();
  }

  handleClickMenu = (menu) => {
    this.setState((prevState) => ({
      menuExpand: menu,
      isExpand:
        prevState.menuExpand == "" || prevState.menuExpand == menu
          ? !prevState.isExpand
          : true,
    }));
  };

  render() {
    const showMenu = this.props.style;
    const { menuExpand, isExpand } = this.state;
    const isExpand1 = "menu1" == menuExpand && isExpand ? true : false;
    const isExpand2 = "menu2" == menuExpand && isExpand ? true : false;
    const styleMenu1 = isExpand1 ? "show" : "";
    const styleMenu2 = isExpand2 ? "show" : "";

    return (
      <div className={`${showMenu}`}>
        <nav className={` wrap-nav-c navbar navbar-expand-md navbar-dark`}>
          <div className="container-c container">
            <div
              className="nav collapse navbar-collapse show"
              id="navbarResponsive"
            >
              <ul className=" navbar-c navbar-nav">
                <li className="nav-item-c nav-item">
                  <Link
                    to="/buy-ticket"
                    className="nav-link-c text-uppercase nav-link"
                    href="about.html"
                  >
                    Mua vé
                  </Link>
                </li>

                <li
                  onClick={() => this.handleClickMenu("menu1")}
                  className={`nav-item-c nav-item dropdown ${styleMenu1}`}
                >
                  <a
                    className="nav-link-c text-uppercase nav-link dropdown-toggle"
                    id="navbarDropdownPortfolio"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={isExpand1}
                  >
                    Phim
                  </a>
                  <div
                    className={`dropdown-c dropdown-menu dropdown-menu-right ${styleMenu1}`}
                    aria-labelledby="navbarDropdownPortfolio"
                  >
                    <Link
                      to="/now-showing"
                      className="nav-link-sub text-uppercase dropdown-item"
                      href="portfolio-1-col.html"
                    >
                      Phim đang chiếu
                    </Link>
                    <Link
                      to="/coming-soon"
                      className="nav-link-sub text-uppercase dropdown-item"
                      href="portfolio-2-col.html"
                    >
                      Phim sắp chiếu
                    </Link>
                  </div>
                </li>

                <li
                  onClick={() => this.handleClickMenu("menu2")}
                  className={`nav-item-c nav-item dropdown ${styleMenu2}`}
                >
                  <Link
                    className="nav-link-c text-uppercase nav-link dropdown-toggle"
                    id="navbarDropdownPortfolio"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={isExpand2}
                  >
                    Góc điện ảnh
                  </Link>
                  <div
                    className={`dropdown-c dropdown-menu dropdown-menu-right ${styleMenu2}`}
                    aria-labelledby="navbarDropdownPortfolio"
                  >
                    <Link
                      to="/movie-genre"
                      className="nav-link-sub text-uppercase dropdown-item"
                      href="portfolio-1-col.html"
                    >
                      thể loại phim
                    </Link>
                    <Link
                      to="/cast"
                      className="nav-link-sub text-uppercase dropdown-item"
                      href="portfolio-2-col.html"
                    >
                      diễn viên
                    </Link>
                    <Link
                      to="/directors"
                      className="nav-link-sub text-uppercase dropdown-item"
                      href="portfolio-2-col.html"
                    >
                      đạo diễn
                    </Link>
                    <Link
                      to="/review-film"
                      className="nav-link-sub text-uppercase dropdown-item"
                      href="portfolio-2-col.html"
                    >
                      bình luận phim
                    </Link>
                    <Link
                      to="/blog-film"
                      className="nav-link-sub text-uppercase dropdown-item"
                      href="portfolio-2-col.html"
                    >
                      blog điện ảnh
                    </Link>
                  </div>
                </li>

                <li className="nav-item-c nav-item">
                  <Link
                    to="/event"
                    className="nav-link-c text-uppercase nav-link"
                    href="services.html"
                  >
                   Ưu Đãi
                  </Link>
                </li>

                <li className="nav-item-c nav-item">
                  <Link
                    to="/theater-ticketprice"
                    className="nav-link-c text-uppercase nav-link"
                    href="contact.html"
                  >
                    Rạp/giá vé
                  </Link>
                </li>

                <li className="nav-item-c nav-item">
                  <Link
                    to="/support"
                    className="nav-link-c text-uppercase nav-link"
                    href="contact.html"
                  >
                    Hỗ trợ
                  </Link>
                </li>
                <Decentralization account={this.props} />
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

function Decentralization(props) {
  let { account } = props.account;
  if (account.length === 0) {
    return <></>;
  } else if (account.length === 1) {
    let stringID = account[0].id;
    stringID = stringID.slice(0, 5);
    if (stringID === "admin") {
      return (
        <li className="nav-item-c nav-item">
          <Link
            to="/admin-page"
            className="nav-link-c text-uppercase nav-link"
            href="contact.html"
          >
            Admin
          </Link>
        </li>
      );
    } else {
      return (
        <li className="nav-item-c nav-item">
          <Link
            to="/user-page"
            className="nav-link-c text-uppercase nav-link"
            href="contact.html"
          >
            Thành viên
          </Link>
        </li>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    account: state.reducerUsers.account,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchDataAccountRequest: () => {
      dispatch(actFetchDataAccountRequest());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
