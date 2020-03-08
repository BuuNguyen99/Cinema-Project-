import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ButtonToolbar } from "react-bootstrap";
class Register extends React.Component {
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
    };
    let header = {
      color: "#f26b38",
      borderBottom: "2px solid #f26b38"
    };
    let modalHeader = {
      borderBottom: "none"
    };
    let text = {
      color: "#f26b38",
      fontSize: "14px",
    };
    let Buttonn = {
      backgroundColor: "#f26b38",
      border: "1px solid #f26b38"
    };
    return (
      <ButtonToolbar style={toolbar}>
        <a
          bsStyle="primary"
          onClick={this.handleShow}
          className="text-secondary text-decoration-none"
          href="#"
        >
           Đăng Ký
        </a>
        <Modal
          {...this.props}
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="custom-modal"
        >
          <Modal.Header closeButton style={modalHeader}>
            <Modal.Title id="contained-modal-title-lg" style={header}>
              ĐĂNG KÝ
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-md-12">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Họ Tên"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <input
                  type="text"
                  class="form-control"
                  id="password"
                  placeholder="Số điện thoại"
                />
              </div>
              <div className="col-md-6">
                <div class="form-group">
                  <select class="form-control">
                    <option>Nam</option>
                    <option>Nữ </option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <input
                  type="email"
                  class="form-control"
                  id=""
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-6">
                <input
                  type="password"
                  class="form-control"
                  id=""
                  placeholder="Mật khẩu"
                />
              </div>
              <div className="col-md-6">
              <input
                  type="password"
                  class="form-control"
                  id="password"
                  placeholder="Xác nhận mật khẩu"
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Địa Chỉ"
                />
              </div>
            </div>
            <div className="row text-center mt-3">
              <div className="col-md-12">
                <p>
                Tôi đã đọc và đồng ý với <span style={text}> CHÍNH SÁCH </span> của chương trình.
                </p>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleHide} style={Buttonn}>
              Đăng Ký
            </Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}
export default Register;
