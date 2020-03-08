import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ButtonToolbar } from "react-bootstrap";
class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false
    };
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
  }

  render() {
      let toolbar = {
          display: "content"
      }
    let header = {
      color: "#f26b38",
      borderBottom: "2px solid #f26b38"
    };
    let modalHeader = {
      borderBottom: "none"
    };
    let text = {
      fontSize: "14px",
      color: "#a0a3a7"
    };
    let Buttonn = {
        backgroundColor: "#f26b38",  
        border: "1px solid #f26b38"  
      };
    return (
      <ButtonToolbar style = {toolbar}>
        <a
          bsStyle="primary"
          onClick={this.handleShow}
          className="pl-2 text-secondary text-decoration-none"
          href="#"
        >
          <i className="fas fa-user mr-1"></i> Đăng nhập
        </a>
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton style={modalHeader}>
            <Modal.Title id="contained-modal-title-lg" style={header}>
              ĐĂNG NHẬP
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12">
                <p style={text}>
                  Vui lòng đăng nhập trước khi mua vé để tích luỹ điểm, cơ hội
                  nhận thêm nhiều ưu đãi từ chương trình thành viên Cinema.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <a href="#" style={text}>
                  Quên mật khẩu ?
                </a>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide} style={Buttonn}>Đăng Nhập</Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}
export default Login;
