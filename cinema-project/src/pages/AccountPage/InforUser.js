import React, { Component } from 'react';

class InforUser extends Component {
  constructor(props, context) {
    super(props, context);
    
    this.state = {
      txtName: props.account.name,
      txtPhone: props.account.phone,
      txtGender: props.account.gender,
      txtBirth: props.account.birth.value,
      txtEmail: props.account.email,
      txtPassword: props.account.pass,
      txtAddress: props.account.address,
      txtCity: props.account.city,
      txtCounty: props.account.county

    };
  }
  render() {          
    return (
        <>
        <div className="row">
              <div className="col-md-6 col-lg-6">
                <div className="form-group">
                  <label for="usr">Họ &amp; Tên</label>
                  <input type="text" className="form-control" id="yourName" value={this.state.txtName}/>
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <div className="form-group">
                  <label for="usr">Sao hiện tại</label>
                  <input
                    type="text"
                    className="form-control"
                    id="Star"
                    value= {this.props.account.currentStar}
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
                    name="dayOfBirth"
                    id="dayOfBirth"
                    max="3000-12-31"
                    min="1000-01-01"
                    className="form-control"
                    value={this.state.txtBirth}
                  />
                </div>
              </div>
              <div className="col-md-4 col-lg-2">
                <div className="form-group">
                  <label for="gender">Giới tính</label>
                  <select className="form-control" id="gender" value={this.state.txtGender}>
                    <option value="Nam">Nam</option>
                    <option value="Nữ">Nữ</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4 col-lg-3">
                <div className="form-group">
                  <label for="usr">Số điện thoại</label>
                  <input type="number" className="form-control" id="phone" value={this.state.txtPhone}/>
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
                  />
                </div>
              </div>
              <div className="col-md-4 col-lg-3">
                <div className="form-group">
                  <label for="city">Tỉnh / Thành phố</label>
                  <select className="form-control" id="gender">
                    <option value="Thùa Thiên Huế">Thùa Thiên Huế</option>
                    <option value="Đà Nẵng">Đà Nẵng</option>
                  </select>
                </div>
              </div>
              <div className="col-md-4 col-lg-3">
                <div className="form-group">
                  <label for="county">Quận / Huyện</label>
                  <select className="form-control" id="gender">
                    <option value="Thùa Thiên Huế">Thùa Thiên Huế</option>
                    <option value="Đà Nẵng">Đà Nẵng</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="row mt-3">
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
                    <input type="checkbox" class="form-check-input" value="" />
                    Đổi mật khẩu
                  </label>
                </div>
              </div>
            </div>
            <div className="row mt-2">
                <div className="col-md-6 col-lg-6">
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="form-control mt-3"
                    placeholder="Mật khẩu hiện tại"
                  />
                <input
                    type="password"
                    name="newPassword"
                    id="newPassword"
                    className="form-control mt-3"
                    placeholder="Mật khẩu mới"
                  />
                <input
                    type="password"
                    name="rePassword"
                    id="rePassword"
                    className="form-control mt-3"
                    placeholder="Xác nhận mật khẩu"
                  />
                </div>
            </div>
            <div className="row my-4">
                <div className="col-md-2 col-lg-2">
                <button type="button" class="btn btn-success mb-5">Lưu lại</button>
                </div>
            </div>
            </>
    );
  }
}

export default InforUser;