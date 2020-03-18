import React, { Component } from 'react';
import { connect } from "react-redux";
import { actSearchMovieRequest, actDeleteAccountRequest, actFetchDataAccountRequest } from '../../actions/action';
import Navigation from '../Navigation/Navigation';
import SearchBox from '../SearchBox/SearchBox';
import Login from './Login';
import Register from './Register';
import './styleHeader.css';
import {  Link } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import { compose } from 'redux'



class Header extends Component {
  constructor() {
    super();
    this.state = {
      openMenu: false,
      openSearch: false,
    };
    
  }

  componentDidMount() {
    this.props.onFetchDataAccountRequest();
  }

  onDelete = (id) => {
    let result = window.confirm ("bạn có muốn đăng xuất ?");
    if (result == true) {
    this.props.onDeleteAccount(id)
    window.location.reload();
    }
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
  handleOnEnter = (e, keyword) => {
        if(e.keyCode === 13) {
            this.props.searchMovie(keyword);
            this.props.history.push('./search')
        }
  }
  render() {
    let showMenu = this.state.openMenu ? 'showMenu' : 'hideMenu';
    let showSearch = this.state.openSearch ? 'showSearch' : 'hideSearch';
    return (
      <div className="wrapper-header">
        {/* Header banner */}
        <div className=" container-fluid">
          <div className="container">
            <div className="wrap-header row d-flex align-items-center py-3">
              <div className="col-4">
                {/* <a onClick= { () => this.onDelete("admin0001")}> aa</a> */}
                <Link to='/'>
                  <img
                    className="imageLogo"
                    src="https://www.galaxycine.vn/website/images/galaxy-logo.png"
                    alt="logo"></img>
                </Link>
              </div>
              <div className="col-8 text-right text-secondary">
              <ShowFunction account = {this.props}  onDelete = {this.onDelete} />
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
            <a className=" linkItem skip-link skip-search">
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
        <SearchBox handleOnEnter={this.handleOnEnter} styleSearch={`${showSearch}`}/>
      </div>
    );
  }
}

function ShowFunction(props ) {
    let { onDelete } = props;
    let { account } = props.account; 
if (account.length === 0) {
  return (
    <div>
      <Login/> <span>/</span> <Register/>
    </div>
  );
}
  else if ( account.length === 1) {
    let stringID = account[0].id;
    stringID = stringID.slice(0, 5);
      if (stringID === 'admin') {      
    return (
      <div>
        <span>Admin: {account[0].name} | </span> <a href="#" onClick=  {() => onDelete(account[0].id)}> Thoát </a>
      </div>
    );
      }
      else {
        return (
          <div>
            <span>User: {account[0].name} | </span> <a href="#" onClick = {() => onDelete(account[0].id)}> Thoát </a>
          </div>
        );
      }
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
      dispatch(actDeleteAccountRequest(id));
    },
    searchMovie: (keyword) => {
      dispatch(actSearchMovieRequest(keyword))
    }
  }
};

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withRouter, withConnect)(Header);
