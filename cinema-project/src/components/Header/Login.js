import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ButtonToolbar } from "react-bootstrap";
import {
  actFetchDataUsersRequest,
  actLoginAccountRequest,
  actFetchDataAdminRequest
} from "./../../actions/action";
import { connect } from "react-redux";

class Login extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleHide = this.handleHide.bind(this);

    this.state = {
      show: false,
      txtPassword: {
        value: "",
        isInputValid: true,
        errorMessage: ""
      },
      txtEmail: {
        value: "",
        isInputValid: true,
        errorMessage: ""
      },
      checkingU: false,
      checkingA: false
    };
  }

  componentDidMount() {
    this.props.onFetchDataUser();
    this.props.onFetchDataAdmin();
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleHide() {
    this.setState({ show: false });
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
      this.state[name].value
    );
    const newState = { ...this.state[name] }; /* dummy object */
    newState.isInputValid = isInputValid;
    newState.errorMessage = errorMessage;
    this.setState({ [name]: newState });
  };

  onLogin = e => {
    let { txtPassword, txtEmail } = this.state;
    let { users } = this.props;
    let { admin } = this.props;
    if (
      txtPassword.value !== "" &&
      txtPassword.isInputValid === true &&
      txtEmail.value !== "" &&
      txtEmail.isInputValid === true
    ) {
      const { checkingU } = checkingUser(txtEmail.value);
      if (checkingU === true) {
        for (let i = 0; i < users.length; i++) {
          if (
            txtEmail.value === users[i].email &&
            txtPassword.value === users[i].pass
          ) {
            alert("Đăng nhập thành công");
            let accountUser = {
              id: users[i].id,
              name: users[i].name,
              email: users[i].email,
              phone: users[i].phone,
              gender: users[i].gender,
              birth: users[i].birth,
              pass: users[i].pass,
              image: users[i].image,
              address: users[i].address
            };
            this.props.onLoginAccount(accountUser);
            this.setState({ show: false });
            return null;
          }
        }
        alert("Tài khoản hoặc mật khẩu không đúng");
        e.preventDefault();
      } else {
        const { checkingA } = checkingAdmin(txtEmail.value);
        if (checkingA === true) {
          for (let j = 0; j < admin.length; j++) {
            if (
              txtEmail.value === admin[j].email &&
              txtPassword.value === admin[j].pass
            ) {
              alert("Đăng nhập thành công");
              let accountAdmin = {
                id: admin[j].id,
                name: admin[j].name,
                email: admin[j].email,
                pass: admin[j].pass,
                image: admin[j].image
              };
              this.props.onLoginAccount(accountAdmin);
              this.setState({ show: false });
              return null;
            }
          }
          alert("Tài khoản hoặc mật khẩu không đúng");
          e.preventDefault();
        }
      }
    } else {
      alert("Vui Lòng điền đầy đủ thông tin đăng nhập");
      e.preventDefault();
    }
    
  };

  render() {
    let { txtEmail, txtPassword } = this.state;

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
      fontSize: "14px",
      color: "#a0a3a7"
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
            <form onSubmit={this.onLogin} id="formLogin">
              <div className="row">
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
                <div className="col-md-12">
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
              </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <a href="#" style={text}>
                  Quên mật khẩu ?
                </a>
              </div>
            </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" form="formLogin" style={Buttonn}>
              Đăng Nhập
            </Button>
          </Modal.Footer>
        </Modal>
      </ButtonToolbar>
    );
  }
}

const validateInput = (type, checkingText) => {
  if (type === "txtEmail") {
    if (checkingText !== "") {
      return { isInputValid: true, errorMessage: "" };
    } else {
      return {
        isInputValid: false,
        errorMessage: "Email không được để trống."
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

const checkingUser = checkingText => {
  const regexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
  const checkingResult = regexp.exec(checkingText);
  if (checkingResult !== null) {
    return { checkingU: true };
  } else {
    return { checkingU: false };
  }
};

const checkingAdmin = checkingText => {
  const regexp = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+$/;
  const checkingResult = regexp.exec(checkingText);
  if (checkingResult !== null) {
    return { checkingA: true };
  } else {
    return { checkingA: false };
  }
};

const mapStateToProps = state => {
  return {
    users: state.reducerUsers.users,
    account: state.reducerUsers.account,
    admin: state.reducerAdmin.admin
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchDataUser: () => {
      dispatch(actFetchDataUsersRequest());
    },
    onLoginAccount: account => {
      dispatch(actLoginAccountRequest(account));
    },
    onFetchDataAdmin: () => {
      dispatch(actFetchDataAdminRequest());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
