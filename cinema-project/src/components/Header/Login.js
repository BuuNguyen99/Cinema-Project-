import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import { Button, ButtonToolbar } from "react-bootstrap";
import { actFetchDataUsersRequest, actFetchDataAdminRequest } from "./../../actions/action";
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
      }
    };
  }
  componentDidMount() {
    this.props.onFetchDataUser();
    // this.props.onFetchDataAdmin();
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
  onSave = e => {
    e.preventDefault();
    let { txtPassword, txtEmail } = this.state;
    let { users } = this.props;
    if (
      txtPassword.value !== "" &&
      txtPassword.isInputValid === true &&
      txtEmail.value !== "" && txtEmail.isInputValid === true
    ) {
      if( users.length > 0 ) {
        for( let i = 0 ; i < users.length ; i ++ ) {
          if((txtEmail.value === users[i].email) && (txtPassword.value === users[i].pass)) {
            alert ("Đăng nhập thành công");
            this.setState({ show: false });
            return null;
            
          }
        }
        alert( "Tài khoản hoặc mất khẩu không đúng");
      }
      else {
            alert("đVui lòng đăng ký");
      }
    } else {
      console.log(users.length);

      alert("Vui Lòng điền đầy đủ thông tin đăng nhập");
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
            <form onSubmit={this.onSave} id="nameform">
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
            </form>
            <div className="row mt-3">
              <div className="col-md-12">
                <a href="#" style={text}>
                  Quên mật khẩu ?
                </a>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" form="nameform" style={Buttonn}>
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
  console.log(state)
  return {
    users: state.reducerUsers.users
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchDataUser: () => {
      dispatch(actFetchDataUsersRequest());
    },
    
  //   onFetchDataAdmin: () => {
  //     dispatch(actFetchDataAdminRequest());
  //   }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
