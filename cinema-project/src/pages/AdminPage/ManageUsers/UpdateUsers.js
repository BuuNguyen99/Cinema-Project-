import React, { Component } from "react";
import { connect } from "react-redux";
import { actUpdateUserRequest } from "../../../actions/action";
class UpdateUsers extends Component {
  constructor(props) {
    super(props);
    let updateUser = JSON.parse(localStorage.getItem("updateUser"));
    this.state = {
      txtName: {
        value: updateUser.name,
        isInputValid: true,
        errorMessage: "",
      },
      txtPhone: {
        value: updateUser.phone,
        isInputValid: true,
        errorMessage: "",
      },
      txtGender: updateUser.gender,
      txtBirth: updateUser.birth,
      txtEmail: {
        value: updateUser.email,
      },
      txtAddress: {
        value: updateUser.address,
        isInputValid: true,
        errorMessage: "",
      },
      txtCurrentStar: {
        value: updateUser.currentStar,
      },
      txtTargets: {
        value: updateUser.targets,
      },
      txtPassword: {
        value: updateUser.pass,
      },
      id: updateUser.id,
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
      this.state[name].value
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
  onBack = () => {
    let { history } = this.props;
    history.goBack();
  };

  onSave = (e) => {
    e.preventDefault();
    let { history } = this.props;
    let {
      txtName,
      txtPhone,
      txtGender,
      txtPassword,
      txtEmail,
      txtAddress,
      txtBirth,
      id,
      txtCurrentStar,
      txtTargets,
    } = this.state;
    if (
      txtName.value !== "" &&
      txtName.isInputValid === true &&
      txtPhone.value !== "" &&
      txtPhone.isInputValid === true &&
      txtAddress.value !== "" &&
      txtAddress.isInputValid === true &&
      txtCurrentStar !== "" &&
      txtTargets !== ""
    ) {
      let updateUser = {
        id: id,
        name: txtName.value,
        email: txtEmail.value,
        phone: txtPhone.value,
        gender: txtGender,
        birth: txtBirth,
        pass: txtPassword.value,
        address: txtAddress.value,
        currentStar: txtCurrentStar.value,
        targets: txtTargets.value,
      };
        let result = window.confirm("Bạn có muốn lưu thông tin đã chỉnh sửa ?")
        if(result) {
            this.props.onUpdateUser(updateUser);
            history.goBack();
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
      txtEmail,
      txtAddress,
      txtBirth,
      txtCurrentStar,
      txtTargets,
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
              Update User
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
            <div className="col-md-4 col-lg-2">
              <div className="form-group">
                <label for="usr">Sao hiện tại</label>
                <input
                  type="number"
                  className="form-control"
                  id="Star"
                  name="txtCurrentStar"
                  value={txtCurrentStar.value}
                  onChange={this.handleInput}
                />
              </div>
            </div>
            <div className="col-md-4 col-lg-2">
              <div className="form-group">
                <label for="usr">Chỉ tiêu 2020</label>
                <input
                  type="number"
                  className="form-control"
                  id="targets"
                  name="txtTargets"
                  value={txtTargets.value}
                  onChange={this.handleInput}
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
                  value={txtGender}
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
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  name="txtEmail"
                  value={txtEmail.value}
                  disabled
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

const mapDispatchToProps = (dispatch) => {
  return {
    onUpdateUser: (updateUser) => {
      dispatch(actUpdateUserRequest(updateUser));
    },
  };
};

export default connect(null, mapDispatchToProps)(UpdateUsers);
