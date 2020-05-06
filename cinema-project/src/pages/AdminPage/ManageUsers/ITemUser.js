import React, { Component } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import moment from "moment";
import "./ItemUser.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { actDeleteUserRequest } from "../../../actions/action";

class ItemUser extends Component {
  DeleteUser = (idUser) => {
    let result = window.confirm("Bạn có muốn xóa Tài khoản này ?");
    if (result) {
      this.props.onDeleteUser(idUser);
      window.location.reload();
    }
  };
  UpdateUser = (user) => {
    localStorage.setItem("updateUser", JSON.stringify(user));
  };
  render() {
    console.log(this.props);
    let { users } = this.props;
    const birth = moment(users.birth).format("DD-MM-YYYY");

    return (
      <>
        <TableRow>
          <TableCell align="center">{users.name}</TableCell>
          <TableCell align="center">{users.email}</TableCell>
          <TableCell align="center">{users.phone}</TableCell>
          <TableCell align="center">{users.gender}</TableCell>
          <TableCell align="center">{birth}</TableCell>
          <TableCell align="center">{users.address}</TableCell>
          <TableCell align="center">{users.currentStar}</TableCell>
          <TableCell align="center">{users.targets}</TableCell>
          <TableCell align="center">
            <Link to="/admin-page/updateUsers" onClick={() => this.UpdateUser(users)}>
              <i className="fas fa-user-edit iconUp"></i>
            </Link>
          </TableCell>
          <TableCell align="center">
            <i
              className="fas fa-user-minus iconDel"
              onClick={() => this.DeleteUser(users.id)}
            ></i>
          </TableCell>
        </TableRow>
      </>
    );
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    onDeleteUser: (user) => {
      dispatch(actDeleteUserRequest(user));
    },
  };
};
export default connect(null, mapDispatchToProps)(ItemUser);
