import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ButtonToolbar } from "react-bootstrap";
import callApi from "../../utils/ApiCaller";


class Register extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      id: "",
      txtName: "",
      txtPhone: "",
      txtGender: "Nam",
      txtEmail: "",
      txtPassword: "",
      txtRePassword: "",
      txtAddress: ""
    };
  }
  // validateInput = (type, checkingText) => {
  //   if (type === "phonenumber") {
  //     const regexp = /^\d{10,11}$/;
  //     const checkingResult = regexp.exec(checkingText);
  //     if (checkingResult !== null) {
  //       return { isInputValid: true, errorMessage: "" };
  //     } else {
  //       return {
  //         isInputValid: false,
  //         errorMessage: "Số điện thoại phải có 10 - 11 chữ số."
  //       };
  //     }
  //   }

  //   if (type === "fullname") {
  //     /* Kiểm tra fullname */
  //   }
  // };

  // handleInputValidation = event => {
  //   const { name } = event.target;
  //   const { isInputValid, errorMessage } = validateInput( name,this.state[name].value );
  //   const newState = { ...this.state[name] }; /* dummy object */
  //   newState.isInputValid = isInputValid;
  //   newState.errorMessage = errorMessage;
  //   this.setState({ [name]: newState });
  // };

  handlerChange = e => {
    const value = e.target.value;
    this.setState({
      [e.target.name]: value
    });
    console.log(this.state.txtName);
  };

  onSave = e => {
    e.preventDefault();
    console.log(this.state);
    let {txtName, txtPhone, txtGender, txtPassword, txtEmail, txtAddress } = this.state;
    callApi('user', 'POST', {
      name: txtName,
      email: txtEmail,
      phone: txtPhone,
      gender: txtGender,
      birth: "",
      pass: txtPassword,
      image: ""
    }).then(res => {
      console.log(res);
      
    });

  };

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
      fontSize: "14px"
    };
    let Buttonn = {
      backgroundColor: "#f26b38",
      border: "1px solid #f26b38"
    };
    let {
      txtName,
      txtPhone,
      txtGender,
      txtPassword,
      txtRePassword,
      txtEmail,
      txtAddress
    } = this.state;
    return (
      <ButtonToolbar style={toolbar}>
        <a
          bsStyle="primary"
          onClick={this.handleShow}
          className="pl-2 text-secondary text-decoration-none"
          href="#"
        >
          <i className="far fa-bell mr-1"></i> Đăng Ký
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
            <form onSubmit={this.onSave} id="nameform">
              <div className="row">
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder="Họ Tên"
                    name="txtName"
                    value={txtName}
                    onChange={this.handlerChange}
                  />
                  <FormError
                    type="txtName"
                    isHidden={this.state.isInputValid}
                    errorMessage={this.state.errorMessage}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    id="phoneNumber"
                    placeholder="Số điện thoại"
                    name="txtPhone"
                    value={txtPhone}
                    onChange={this.handlerChange}
                  />
                  <FormError
                    type="txtPhone"
                    isHidden={this.state.isInputValid}
                    errorMessage={this.state.errorMessage}
                  />
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <select
                      className="form-control"
                      name="txtGender"
                      value={txtGender}
                      onChange={this.handlerChange}
                    >
                      <optgroup label="Giới Tính">Giới Tính</optgroup>
                      <option value="Nam">Nam </option>
                      <option value="Nữ">Nữ </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    name="txtEmail"
                    value={txtEmail}
                    onChange={this.handlerChange}
                  />
                  <FormError
                    type="txtEmail"
                    isHidden={this.state.isInputValid}
                    errorMessage={this.state.errorMessage}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Mật khẩu"
                    name="txtPassword"
                    value={txtPassword}
                    onChange={this.handlerChange}
                  />
                  <FormError
                    type="txtPassword"
                    isHidden={this.state.isInputValid}
                    errorMessage={this.state.errorMessage}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="password"
                    className="form-control"
                    id="rePassword"
                    placeholder="Xác nhận mật khẩu"
                    name="txtRePassword"
                    value={txtRePassword}
                    onChange={this.handlerChange}
                  />
                  <FormError
                    type="txtRePassword"
                    isHidden={this.state.isInputValid}
                    errorMessage={this.state.errorMessage}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Địa Chỉ"
                    name="txtAddress"
                    value={txtAddress}
                    onChange={this.handlerChange}
                  />
                  <FormError
                    type="txtAddress"
                    isHidden={this.state.isInputValid}
                    errorMessage={this.state.errorMessage}
                  />
                </div>
              </div>
              <div className="row text-center mt-3">
                <div className="col-md-12">
                  <p>
                    Tôi đã đọc và đồng ý với{" "}
                    <span style={text}> CHÍNH SÁCH </span> của chương trình.
                  </p>
                </div>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              form="nameform"
              value="Submit"
              onClick={this.handleHide}
              style={Buttonn}
            >
              Đăng Ký
            </Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

function FormError(props) {
  /* nếu isHidden = true, return null ngay từ đầu */
  if (props.isHidden) {
    return null;
  }

  return <div>{props.errorMessage}</div>;
}

export default Register;
