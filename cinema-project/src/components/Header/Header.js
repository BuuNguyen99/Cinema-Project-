import React, { Component } from "react";
import "./styleHeader.css";
import Login from "./Login";
import Register from "./Register";
class Header extends Component {
  render() {
    return (
      <div className="container">
          <div className="row d-flex align-items-center py-3">
              <div className="col-4">
                  <img className="imageLogo" src="https://www.galaxycine.vn/website/images/galaxy-logo.png" alt="logo"></img>
              </div>
              <div className="col-4">
                  <input className="form-control w-75 mx-auto" placeholder="Tìm tên phim, diễn viên..."></input>
              </div>
              <div className="col-4 text-right text-secondary">
                  <Login/> <span>|</span> <Register/>
              </div>
          </div>
      </div>

    );
  }
}

export default Header;
