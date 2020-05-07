import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { actFetchDataUsersRequest } from "../../../actions/action";
import { connect } from "react-redux";
import ItemUser from "./ITemUser";
import { Link } from "react-router-dom";

class ManageUsers extends React.Component {
  componentDidMount() {
    this.props.onFetchDataUser();
  }
  render() {
    let { users } = this.props;
    return <SimpleTable users={users} />;
  }
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


function SimpleTable(props) {
  const classes = useStyles();
  let { users } = props;
  let dataUsers = users.map((users, index) => {
    return <ItemUser key={`itemUser ${index}`} users={users} />;
  });
  let margin = {
    marginBottom : "150px"
  }
  return (
    <div className="container-fluid" style = {margin}>
      <div className="row mb-3">
        <div className="col-md-12">
          <Link to="/admin-page/addUsers">
          <button type="button" class="btn btn-outline-info ml-3">
            Thêm Users
          </button>
          </Link>
        </div>
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center"> Họ &amp; Tên</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Số Điện Thoại</TableCell>
              <TableCell align="center">Giới Tính</TableCell>
              <TableCell align="center">Ngày Sinh</TableCell>
              <TableCell align="center">Địa Chỉ</TableCell>
              <TableCell align="center">Sao Hiện Tại</TableCell>
              <TableCell align="center">Chỉ Tiêu 2020</TableCell>
              <TableCell align="center">Update</TableCell>
              <TableCell align="center">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{dataUsers}</TableBody>
        </Table>
      </TableContainer>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);
