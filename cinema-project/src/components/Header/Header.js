import React, { Component } from "react";
import "./styleHeader.css";
import Login from "./Login";
import Register from "./Register";
import Navigation from "../Navigation/Navigation";
import SearchBox from "../SearchBox/SearchBox";
import { connect } from "react-redux";
import {
  actFetchDataAccountRequest,
  actDeleteAccountRequest
} from "./../../actions/action";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      openMenu: false,
      openSearch: false
    };
  }

  componentDidMount() {
    this.props.onFetchDataAccountRequest();
  }

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

  onDelete = () => {
    this.props.onDeleteAccount();
  }

  render() {
    let showMenu = this.state.openMenu ? "showMenu" : "hideMenu";
    let showSearch = this.state.openSearch ? "showSearch" : "hideSearch";
    return (
      <div className="wrapper-header">
        {/* Header banner */}
        <div className=" container-fluid">
          <div className="container">
            <div className="wrap-header row d-flex align-items-center py-3">
              <div className="col-4">
                <a href="#" onClick={this.onDelete}>
                  <img
                    className="imageLogo"
                    src="https://www.galaxycine.vn/website/images/galaxy-logo.png"
                    alt="logo"
                  ></img>
                </a>
              </div>
              <div className="col-8 text-right text-secondary">
                 <ShowFunction account = {this.props} onDelete = {this.onDelete()}/>
              </div>
            </div>
          </div>
        </div>

        {/* menu mobile */}
        <div className={`skip-links`}>
          <span
            className="skip-links-item"
            onClick={this.handleToggleMenu.bind(this)}
          >
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
            onClick={this.handleToggleSearch.bind(this)}
          >
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

        {/* Navigation */}
        <Navigation style={showMenu} />

        {/* Search */}
        <SearchBox styleSearch={`${showSearch}`} />
      </div>
    );
  }
}


function ShowFunction(props ,onDelete) {
    console.log(props);
    
    
  let account = props.account.account;
  if (account.length === 0) {
    return (
      <div>
        <Login/> <span>/</span> <Register/>
      </div>
    );
  }
    else if ( account.length === 1) {
      return (
        <div>
          <span>{account[0].name} | </span> <a href="#" > Thoát </a>
        </div>
      );
    }
  
}




const mapStateToProps = state => {
  return {
    account: state.reducerUsers.account
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchDataAccountRequest: () => {
      dispatch(actFetchDataAccountRequest());
    },
    onDeleteAccount: (id) => {
      dispatch(actDeleteAccountRequest(id))
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
