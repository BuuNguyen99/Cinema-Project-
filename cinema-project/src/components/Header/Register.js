import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ButtonToolbar } from "react-bootstrap";
import { actRegisterUserRequest, actFetchDataUsersRequest } from "./../../actions/action";
import { connect } from "react-redux";
import {  Link } from "react-router-dom";

class Register extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      txtName: {
        value: "",
        isInputValid: true,
        errorMessage: ""
      },
      txtPhone: {
        value: "",
        isInputValid: true,
        errorMessage: ""
      },
      txtGender: "Nam",
      txtEmail: {
        value: "",
        isInputValid: true,
        errorMessage: ""
      },
      txtPassword: {
        value: "",
        isInputValid: true,
        errorMessage: ""
      },
      txtRePassword: {
        value: "",
        isInputValid: true,
        errorMessage: ""
      },
      txtAddress: {
        value: "",
        isInputValid: true,
        errorMessage: ""
      }
    };
  }

  handleInput = event => {
    const { name, value } = event.target;
    const newState = { ...this.state[name] }; /* dummy object */
    newState.value = value;
    this.setState({ [name]: newState });
  };

  handleInputValidation = event => {
    const { name } = event.target;
    const { isInputValid, errorMessage } = validateInput(
      name,
      this.state[name].value,
      this.state.txtPassword.value
    );
    const newState = { ...this.state[name] }; /* dummy object */
    newState.isInputValid = isInputValid;
    newState.errorMessage = errorMessage;
    this.setState({ [name]: newState });
  };

  handleChangeGender= event => {
    this.setState ({
      txtGender : event.target.value
    })
  };

  componentDidMount() {
    this.props.onFetchDataUser();
  }

  onSave = e => {
    e.preventDefault();
    let {
      txtName,
      txtPhone,
      txtGender,
      txtPassword,
      txtRePassword,
      txtEmail,
      txtAddress
    } = this.state;

    let { users } = this.props;
    if (
      txtName.value !== "" &&
      txtName.isInputValid === true &&
      txtPhone.value !== "" &&
      txtPhone.isInputValid === true &&
      txtPassword.value !== "" &&
      txtPassword.isInputValid === true &&
      txtRePassword.value !== "" &&
      txtRePassword.isInputValid == true &&
      txtEmail.value !== "" &&
      txtEmail.isInputValid === true &&
      txtAddress.value !== "" &&
      txtAddress.isInputValid === true
    ) {
      let user = {
        name: txtName.value,
        email: txtEmail.value,
        phone: txtPhone.value,
        gender: txtGender,
        birth: "",
        pass: txtPassword.value,
        image: "",
        address: txtAddress.value
      };

      let lengthUsers = users.length;
      if (lengthUsers > 0) {
        for (let i = 0; i < lengthUsers; i++) {
          if (txtEmail.value === users[i].email) {
            alert("Tài khoản đã tồn tại");
            return null;
          }
        }
        this.props.onRegisterUser(user);
        alert("đăng kí thành công vui lòng đăng nhâp");
        this.setState({ show: false });
      } else {
        this.props.onRegisterUser(user);
        alert("đăng kí thành công vui lòng đăng nhâp");
        this.setState({ show: false });
      }
    } else {
      alert("Vui Lòng điền đầy đủ thông tin và đúng định dạng");
    }
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
        <button
          onClick={this.handleShow}
          className="btn-header text-secondary text-decoration-none"
          to=''
        >
          Đăng Ký
        </button>
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
                    value={txtName.value}
                    placeholder="Họ Tên"
                    name="txtName"
                    onChange={this.handleInput}
                    onBlur={this.handleInputValidation}
                  />
                  <FormError
                    type="txtName"
                    isHidden={this.state.txtName.isInputValid}
                    errorMessage={this.state.txtName.errorMessage}
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
                    value={txtPhone.value}
                    onChange={this.handleInput}
                    onBlur={this.handleInputValidation}
                  />
                  <FormError
                    type="txtPhone"
                    isHidden={this.state.txtPhone.isInputValid}
                    errorMessage={this.state.txtPhone.errorMessage}
                  />
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <select
                      className="form-control"
                      name="txtGender"
                      value={txtGender.value}
                      onChange={this.handleChangeGender}
                    >
                      <option value="" disabled selected>Select Gender</option>
                      <option value="Nam">Nam </option>
                      <option value="Nữ">Nữ </option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                    name="txtEmail"
                    value={txtEmail.value}
                    onChange={this.handleInput}
                    onBlur={this.handleInputValidation}
                  />
                  <FormError
                    type="txtEmail"
                    isHidden={this.state.txtEmail.isInputValid}
                    errorMessage={this.state.txtEmail.errorMessage}
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
                    value={txtPassword.value}
                    onChange={this.handleInput}
                    onBlur={this.handleInputValidation}
                  />
                  <FormError
                    type="txtPassword"
                    isHidden={this.state.txtPassword.isInputValid}
                    errorMessage={this.state.txtPassword.errorMessage}
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="password"
                    className="form-control"
                    id="rePassword"
                    placeholder="Xác nhận mật khẩu"
                    name="txtRePassword"
                    value={txtRePassword.value}
                    onChange={this.handleInput}
                    onBlur={this.handleInputValidation}
                  />
                  <FormError
                    type="txtRePassword"
                    isHidden={this.state.txtRePassword.isInputValid}
                    errorMessage={this.state.txtRePassword.errorMessage}
                  />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    placeholder="Địa chỉ"
                    name="txtAddress"
                    value={txtAddress.value}
                    onChange={this.handleInput}
                    onBlur={this.handleInputValidation}
                  />
                  <FormError
                    type="txtAddress"
                    isHidden={this.state.txtAddress.isInputValid}
                    errorMessage={this.state.txtAddress.errorMessage}
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
            <Button type="submit" form="nameform" style={Buttonn}>
              Đăng Ký
            </Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

const validateInput = (type, checkingText, pass) => {
  if (type === "txtName") {
    const regexp = /^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ ]+$/;
    const checkingResult = regexp.exec(checkingText);
    if (checkingResult !== null) {
      return { isInputValid: true, errorMessage: "" };
    } else {
      return {
        isInputValid: false,
        errorMessage: "Không chứa số và kí tự đặc biệt."
      };
    }
  }
  if (type === "txtPhone") {
    const regexp = /^\d{10,11}$/;
    const checkingResult = regexp.exec(checkingText);
    if (checkingResult !== null) {
      return { isInputValid: true, errorMessage: "" };
    } else {
      return {
        isInputValid: false,
        errorMessage: "SĐT phải có 10 - 11 chữ số."
      };
    }
  }
  if (type === "txtEmail") {
    const regexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    const checkingResult = regexp.exec(checkingText);
    if (checkingResult !== null) {
      return { isInputValid: true, errorMessage: "" };
    } else {
      return {
        isInputValid: false,
        errorMessage: "Email không hợp lệ."
      };
    }
  }
  if (type === "txtPassword") {
    const regexp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    const checkingResult = regexp.exec(checkingText);
    if (checkingResult !== null) {
      return { isInputValid: true, errorMessage: "" };
    } else {
      return {
        isInputValid: false,
        errorMessage: "Mật khẩu từ 8 kí tự bao gồm chữ và số"
      };
    }
  }
  if (type === "txtRePassword") {
    let rePass = checkingText;
    if (pass === rePass) {
      return { isInputValid: true, errorMessage: "" };
    } else {
      return {
        isInputValid: false,
        errorMessage: "Mật khẩu không khớp"
      };
    }
  }
  if (type === "txtAddress") {
    if (checkingText !== null) {
      return { isInputValid: true, errorMessage: "" };
    } else {
      return {
        isInputValid: false,
        errorMessage: "Mật khẩu từ 8 kí tự bao gồm chữ và số"
      };
    }
  }
};

function FormError(props) {
  /* nếu isHidden = true, return null ngay từ đầu */
  let color = {
    color: "red"
  };

  if (props.isHidden) {
    return null;
  }

  return (
    <div className="m-1" style={color}>
      {props.errorMessage}
    </div>
  );
}

const mapStateToProps = state => {

  return {
    users: state.reducerUsers.users
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchDataUser: () => {
      dispatch(actFetchDataUsersRequest());
    },
    onRegisterUser: register => {
      dispatch(actRegisterUserRequest(register));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
