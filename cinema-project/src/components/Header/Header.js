import React, { Component } from 'react';
import { connect } from "react-redux";
import { actSearchMovieRequest } from '../../actions/action';
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
    console.log('keycode:', e.keyCode)
        console.log('key:', keyword)
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
                <Link to='/'>
                  <img
                    className="imageLogo"
                    src="https://www.galaxycine.vn/website/images/galaxy-logo.png"
                    alt="logo"></img>
                </Link>
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
            <Link className="linkItem">
              <span className="icon">
                <span>
                  <i className="fas fa-bars"></i>
                </span>
              </span>
              <span className="label">Menu</span>
            </Link>
          </span>
          <span
            className="skip-links-item"
            onClick={this.handleToggleSearch.bind(this)}>
            <Link className=" linkItem skip-link skip-search">
              <span className="icon">
                <span>
                  <i className="fas fa-search"></i>
                </span>
              </span>
              <span className="label">Tìm kiếm</span>
            </Link>
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

const mapDispatchToProps = (dispatch) => {
  return {
      searchMovie: (keyword) => {
          dispatch(actSearchMovieRequest(keyword))
      }
  }
}

const withConnect = connect(
  null,
  mapDispatchToProps,
);

export default compose(withRouter, withConnect)(Header);
