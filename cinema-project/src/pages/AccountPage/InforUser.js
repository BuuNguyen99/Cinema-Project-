import React, { Component } from "react";

class InforUser extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      txtName: props.account.name,
      txtPhone: props.account.phone,
      txtGender: props.account.gender,
      txtBirth: props.account.birth.value,
      txtEmail: props.account.email,
      txtPassword: "",
      txtNewPassword: "",
      txtRePassword: "",
      txtAddress: props.account.address,
      isChecked: false,
    };
  }

  handleChange(e) {
    this.setState({
      isChecked: e.target.checked,
    });
  }

  handleInput = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSave = (e, props) => {
    e.preventDefault();

    if (this.state.isChecked) {
      if (this.state.txtPassword === props.account.pass) {
      }
    }
  };
  render() {
    let changPasswordHide = {
      display: "none",
    };
    let changPasswordUp = {
      display: "block",
    };
    console.log(this.state.txtBirth);

    return (
      <form onSubmit={this.onSave} id="nameform">
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <div className="form-group">
              <label for="usr">Họ &amp; Tên</label>
              <input
                type="text"
                className="form-control"
                id="yourName"
                name="txtName"
                value={this.state.txtName}
                onChange={this.handleInput}
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
                id="dayOfBirth"
                max="3000-12-31"
                min="1000-01-01"
                className="form-control"
                value={this.state.txtBirth}
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
                value={this.state.txtGender}
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
                value={this.state.txtPhone}
                onChange={this.handleInput}
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
                name="address"
                id="address"
                className="form-control"
                value={this.state.txtAddress}
                onChange={this.handleInput}
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
                value={this.state.txtEmail}
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
                  onChange={(e) => this.handleChange(e)}
                />
                Đổi mật khẩu
              </label>
            </div>
          </div>
        </div>
        <div
          className="row mt-2"
          style={this.state.isChecked ? changPasswordUp : changPasswordHide}
        >
          <div className="col-md-6 col-lg-6">
            <input
              type="password"
              name="txtPassword"
              id="password"
              className="form-control mt-3"
              placeholder="Mật khẩu hiện tại"
              value={this.state.txtPassword}
              onChange={this.handleInput}
            />
            <input
              type="password"
              name="txtNewPassword"
              id="newPassword"
              className="form-control mt-3"
              placeholder="Mật khẩu mới"
              value={this.state.txtNewPassword}
              onChange={this.handleInput}
            />
            <input
              type="password"
              name="txtRePassword"
              id="rePassword"
              className="form-control mt-3"
              placeholder="Xác nhận mật khẩu"
              value={this.state.txtRePassword}
              onChange={this.handleInput}
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-2 col-lg-2">
            <button class="btn btn-success mb-5" type="submit" form="nameform">
              Lưu lại
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default InforUser;
