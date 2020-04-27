import React, { Component } from "react";
import { connect } from "react-redux";
import { actUpdateUserRequest } from "../../actions/action";

class InforUser extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      txtName: {
        value: props.account.name,
        isInputValid: true,
        errorMessage: "",
      },
      txtPhone: {
        value: props.account.phone,
        isInputValid: true,
        errorMessage: "",
      },
      txtGender:  props.account.gender,
      txtBirth: {
        value: props.account.birth.value,
      },
      txtEmail: {
        value: props.account.email,
      },
      getPassword: {
        value: props.account.pass,
      },
      txtPassword: {
        value: ""
      },
      txtNewPassword: {
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
        value: props.account.address,
        isInputValid: true,
        errorMessage: "",
      },
      isChecked: false,
      id: props.account.id,
      currentStar: props.account.currentStar,
      targets: props.account.targets,
      myDeal: props.account.myDeal
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
      this.state.txtNewPassword.value
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

  toggleChange = (e) => {
    this.setState({
      isChecked: e.target.checked,
    });
  };
  onSave = (e) => {
    e.preventDefault();

    let {
      txtName,
      txtPhone,
      txtGender,
      txtPassword,
      getPassword,
      txtNewPassword,
      txtRePassword,
      txtEmail,
      txtAddress,
      txtBirth,
      id,
      targets,
      currentStar,
      myDeal,
      isChecked
    } = this.state; 
    if(isChecked === true) {
      if(txtPassword.value !== getPassword.value) {
        alert("Mật khẩu Trước đó không đúng");
        return null;
      }
      else if(
        txtName.value !== "" &&
        txtName.isInputValid === true &&
        txtPhone.value !== "" &&
        txtPhone.isInputValid === true &&
        txtAddress.value !== "" &&
        txtAddress.isInputValid === true
      ) {
        let accountUser = {
          id: id,
          name: txtName.value,
          email: txtEmail.value,
          phone: txtPhone.value,
          gender: txtGender,
          birth: txtBirth,
          pass: txtNewPassword.value,
          address: txtAddress.value,
          currentStar: currentStar,
          targets: targets,
          myDeal: myDeal
        };
        this.props.onUpdateUser(accountUser);
        alert("Lưu thông tin thành công, vui lòng đăng nhập lại");
        
      }
    }
    else if(
      txtName.value !== "" &&
      txtName.isInputValid === true &&
      txtPhone.value !== "" &&
      txtPhone.isInputValid === true &&
      txtAddress.value !== "" &&
      txtAddress.isInputValid === true
    ) {
      let accountUser = {
        id: id,
        name: txtName.value,
        email: txtEmail.value,
        phone: txtPhone.value,
        gender: txtGender,
        birth: txtBirth,
        pass: getPassword.value,
        address: txtAddress.value,
        currentStar: currentStar,
        targets: targets,
        myDeal: myDeal
      };
      this.props.onUpdateUser(accountUser);
      alert("Lưu thông tin thành công, vui lòng đăng nhập lại");
    }
    else {
      alert("Vui Lòng điền đầy đủ thông tin và đúng định dạng");
    }
  };

  render() {
    let changePasswordHide = {
      display: "none",
    };
    let changePasswordUp = {
      display: "block",
    };
    let {
      txtName,
      txtPhone,
      txtGender,
      txtPassword,
      txtNewPassword,
      txtRePassword,
      txtEmail,
      txtAddress,
      txtBirth,
    } = this.state;   
    return (
      <form onSubmit={this.onSave} id="nameform">
        <div className="row">
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
                type="text"
                className="form-control"
                id="Star"
                value={this.props.account.currentStar}
                disabled
              />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="form-group">
              <label for="usr">Chỉ tiêu 2020</label>
              <input
                type="text"
                className="form-control"
                id="targets"
                value={this.props.account.targets}
                disabled
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
                value={txtBirth.value}
                onChange={this.handleInput}
              />
            </div>
          </div>
          <div className="col-md-4 col-lg-2">
            <div className="form-group">
              <label for="gender">Giới tính</label>
              <select
                className="form-control"
                id="gender"
                name="txtGender"
                value={txtGender}
                onChange={this.handleChangeGender}
              >
                <option value="Nam">Nam</option>
                <option value="Nữ">Nữ</option>
              </select>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="form-group">
              <label for="usr">Số điện thoại</label>
              <input
                type="number"
                className="form-control"
                id="txtPhone"
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
          <div className="col-md-6 col-lg-6">
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                name="email"
                id="email"
                className="form-control"
                value={txtEmail.value}
                disabled
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-md-6 col-lg-12">
            <div class="form-check">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  onChange={this.toggleChange}
                />
                Đổi mật khẩu
              </label>
            </div>
          </div>
        </div>
        <div
          className="row mt-2"
          style={this.state.isChecked ? changePasswordUp : changePasswordHide}
        >
          <div className="col-md-6 col-lg-6">
            <input
              type="password"
              name="txtPassword"
              id="password"
              className="form-control mt-3"
              placeholder="Mật khẩu hiện tại"
              value={txtPassword.value}
              onChange={this.handleInput}
              />
            <input
              type="password"
              name="txtNewPassword"
              id="newPassword"
              className="form-control mt-3"
              placeholder="Mật khẩu mới"
              value={txtNewPassword.value}
              onChange={this.handleInput}
              onBlur={this.handleInputValidation}
              />
            <FormError
              type="txtNewPassword"
              isHidden={this.state.txtNewPassword.isInputValid}
              errorMessage={this.state.txtNewPassword.errorMessage}
            />
            <input
              type="password"
              name="txtRePassword"
              id="rePassword"
              className="form-control mt-3"
              placeholder="Xác nhận mật khẩu"
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
          <div className="col-md-2 col-lg-2">
            <button type="submit" form="nameform" class="btn btn-success mb-5">
              Lưu lại
            </button>
          </div>
        </div>
      </form>
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

  if (type === "txtNewPassword") {
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
        errorMessage: "Mật khẩu từ 8 kí tự bao gồm chữ và số",
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
    onUpdateUser: (user) => {
      dispatch(actUpdateUserRequest(user));
    },
  };
};
export default connect(null,mapDispatchToProps)(InforUser);
