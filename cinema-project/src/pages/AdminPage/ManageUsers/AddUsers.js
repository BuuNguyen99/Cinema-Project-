import React, { Component } from "react";
import { connect } from "react-redux";
import {
  actRegisterUserRequest,
  actFetchDataUsersRequest,
} from "../../../actions/action";
class AddUsers extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      txtName: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      txtPhone: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      txtGender: "Nam",
      txtBirth: "",
      txtEmail: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      txtPassword: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      txtRePassword: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
      txtAddress: {
        value: "",
        isInputValid: true,
        errorMessage: "",
      },
    };
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    const newState = { ...this.state[name] }; /* dummy object */
    newState.value = value;
    this.setState({ [name]: newState });
  };

  handleInputValidation = (event) => {
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

  handleChangeGender = (event) => {
    this.setState({
      txtGender: event.target.value,
    });
  };

  handleChangeBirth = (event) => {
    this.setState({
      txtBirth: event.target.value,
    });
  };

  componentDidMount() {
    this.props.onFetchDataUser();
  }

  onBack = () => {
    let { history } = this.props;
    history.goBack();
  };

  onSave = (e) => {
    e.preventDefault();
    let {
      txtName,
      txtPhone,
      txtGender,
      txtPassword,
      txtRePassword,
      txtEmail,
      txtAddress,
      txtBirth,
    } = this.state;
    let { history } = this.props;

    let { users } = this.props;
    if (
      txtName.value !== "" &&
      txtName.isInputValid === true &&
      txtPhone.value !== "" &&
      txtPhone.isInputValid === true &&
      txtPassword.value !== "" &&
      txtPassword.isInputValid === true &&
      txtRePassword.value !== "" &&
      txtRePassword.isInputValid === true &&
      txtEmail.value !== "" &&
      txtEmail.isInputValid === true &&
      txtAddress.value !== "" &&
      txtAddress.isInputValid === true &&
      txtBirth !== ""
    ) {
      let user = {
        name: txtName.value,
        email: txtEmail.value,
        phone: txtPhone.value,
        gender: txtGender,
        birth: txtBirth,
        pass: txtPassword.value,
        address: txtAddress.value,
        currentStar: 0,
        targets: 0,
      };

      let lengthUsers = users.length;
      if (lengthUsers > 0) {
        for (let i = 0; i < lengthUsers; i++) {
          if (txtEmail.value === users[i].email) {
            alert("Tài khoản đã tồn tại");
            return null;
          }
        }
        let result = window.confirm("Bạn có muốn Thêm Users ?");
        if (result) {
          this.props.onAddUser(user);
          history.goBack();
        }
      } else {
        let result = window.confirm("Bạn có muốn Thêm Users ?");
        if (result) {
          this.props.onAddUser(user);
          history.goBack();
        }
      }
    } else {
      alert("Vui Lòng điền đầy đủ thông tin và đúng định dạng");
    }
  };
  render() {
    let {
      txtName,
      txtPhone,
      txtGender,
      txtPassword,
      txtRePassword,
      txtEmail,
      txtAddress,
      txtBirth,
    } = this.state;
    let linksStyle = {
      fontSize: "18px",
      color: "black",
      textTransform: "uppercase",
    };
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p
              className="link hover-2"
              href="#tab_default_1"
              data-toggle="tab"
              aria-expanded="true"
              style={linksStyle}
            >
              Thêm User
            </p>
          </div>
        </div>
        <form onSubmit={this.onSave} id="nameform">
          <div className="row mt-4">
            <div className="col-md-6 col-lg-6">
              <div className="form-group">
                <label for="usr">Họ &amp; Tên</label>
                <input
                  type="text"
                  className="form-control"
                  id="txtName"
                  name="txtName"
                  value={txtName.value}
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
            <div className="col-md-6 col-lg-6">
              <div className="form-group">
                <label>Email</label>
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
          </div>
          <div className="row mt-3">
            <div className="col-md-6 col-lg-4">
              <div className="form-group">
                <label>Ngày sinh</label>
                <input
                  type="date"
                  name="txtBirth"
                  id="txtBirth"
                  max="3000-12-31"
                  min="1000-01-01"
                  className="form-control"
                  value={txtBirth}
                  onChange={this.handleChangeBirth}
                />
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="form-group">
                <label for="gender">Giới tính</label>
                <select
                  className="form-control"
                  name="txtGender"
                  value={txtGender.value}
                  onChange={this.handleChangeGender}
                >
                  <option value="" disabled selected>
                    Select Gender
                  </option>
                  <option value="Nam">Nam </option>
                  <option value="Nữ">Nữ </option>
                </select>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="form-group">
                <label for="usr">Số điện thoại</label>
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
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-6 col-lg-6">
              <div className="form-group">
                <label>Địa chỉ</label>
                <input
                  type="text"
                  name="txtAddress"
                  id="txtAddress"
                  className="form-control"
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
          </div>
          <div className="row mt-2">
            <div className="col-md-6 col-lg-6">
              <input
                type="password"
                name="txtPassword"
                id="txtPassword"
                className="form-control mt-3"
                placeholder="Nhập Mật khẩu "
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
          <div className="row mt-4">
            <div className="col-md-6 col-lg-6">
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
          <div className="row my-4">
            <div className="col-md-4 col-lg-4">
              <button
                type="button"
                onClick={this.onBack}
                class="btn btn-info mb-5 mr-3"
              >
                Trở Lại
              </button>

              <button
                type="submit"
                form="nameform"
                class="btn btn-success mb-5"
              >
                Lưu lại
              </button>
            </div>
          </div>
        </form>
      </div>
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
        errorMessage: "Không chứa số và kí tự đặc biệt.",
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
        errorMessage: "SĐT phải có 10 - 11 chữ số.",
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
        errorMessage: "Email không hợp lệ.",
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
        errorMessage: "Mật khẩu từ 8 kí tự bao gồm chữ và số",
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
        errorMessage: "Mật khẩu không khớp",
      };
    }
  }
  if (type === "txtAddress") {
    if (checkingText !== null) {
      return { isInputValid: true, errorMessage: "" };
    } else {
      return {
        isInputValid: false,
        errorMessage: "Vui lòng nhập",
      };
    }
  }
};

function FormError(props) {
  let color = {
    color: "red",
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
const mapStateToProps = (state) => {
  return {
    users: state.reducerUsers.users,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onFetchDataUser: () => {
      dispatch(actFetchDataUsersRequest());
    },
    onAddUser: (addUsers) => {
      dispatch(actRegisterUserRequest(addUsers));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddUsers);
