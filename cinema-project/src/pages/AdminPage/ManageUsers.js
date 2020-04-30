import React from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import { actFetchDataUsersRequest } from "../../actions/action";
import { actUpdateUserRequest, actDeleteUserRequest, actAddUserRequest } from "../../actions/action";

class ManageUsers extends React.Component {
  componentDidMount() {
    this.props.onFetchDataUser();
  }

  render() {
    let { users } = this.props;
    if (Object.keys(users).length !== 0) {
      localStorage.setItem("users", JSON.stringify(users));
    } else {
      users = JSON.parse(localStorage.getItem("users"));
    }
    return (
      <div className="container-fluid my-4">
        <MaterialTableDemo
          users={users}
          onUpdateUser={this.props.onUpdateUser}
          onDeleteUser={this.props.onDeleteUser}
          onAddUser={this.props.onAddUser}
        />
      </div>
    );
  }
}

function MaterialTableDemo(props) {
  let { users, onUpdateUser,onDeleteUser, onAddUser } = props;
  let data = users;

  const [state, setState] = React.useState({
    columns: [
      { title: "Họ & Tên", field: "name" },
      { title: "Email", field: "email", type: "email" },
      { title: "Điện Thoại", field: "phone" },
      {
        title: "Giới Tính",
        field: "gender",
        lookup: { Nam: "Nam", Nữ: "Nữ" },
      },
      { title: "Ngày Sinh", field: "birth", type: "date" },
      { title: "Mật Khẩu", field: "pass" },
      { title: "Địa Chỉ", field: "address" },
      { title: "Sao Hiện Tại", field: "currentStar", type: "numeric" },
      { title: "Chỉ Tiêu 2020", field: "targets", type: "numeric" },
    ],
    data,
  });

  return (
    <MaterialTable
      title="Users"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                  const data = [...prevState.data];
                  data.push(newData);
                  console.log(newData);
                  onAddUser(newData);
                  localStorage.setItem("users", JSON.stringify(data));
                  users = JSON.parse(localStorage.getItem("users"));
                  window.location.reload();
                  return { ...prevState, data };

              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  onUpdateUser(newData);
                  localStorage.setItem("users", JSON.stringify(data));
                  users = JSON.parse(localStorage.getItem("users"));
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                console.log(oldData.id); 
                onDeleteUser(oldData.id);
                localStorage.setItem("users", JSON.stringify(data));
                users = JSON.parse(localStorage.getItem("users"));
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}

const mapStateToProps = (state) => {
  return {
    users: state.reducerUsers.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchDataUser: () => {
      dispatch(actFetchDataUsersRequest());
    },
    onUpdateUser: (user) => {
      dispatch(actUpdateUserRequest(user));
    },
    onDeleteUser: (id) => {
      dispatch(actDeleteUserRequest(id));
    },
    onAddUser: (user) => {
      dispatch(actAddUserRequest(user));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);
