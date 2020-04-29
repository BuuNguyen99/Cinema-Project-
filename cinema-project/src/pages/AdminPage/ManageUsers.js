import React from "react";
import MaterialTable from "material-table";
import { connect } from "react-redux";
import { actFetchDataUsersRequest } from "../../actions/action";

class ManageUsers extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.onFetchDataUser();
  }

  render() {
     console.log(this.props);
    return (
      <div className="container-fluid my-4">
        <MaterialTableDemo  />
      </div>
    );
  }
}

function MaterialTableDemo(props) {
  let data = [];
  //for (let i = 0; i < props.users.length; i++) {
    // let tempt =
    //   {
    //     id: props.user[i].id,
    //     name: props.user[i].name,
    //     email: props.user[i].email,
    //     phone: props.user[i].phone,
    //     gender: props.user[i].gender,
    //     birth: props.user[i].birth.value,
    //     pass: props.user[i].pass,
    //     address: props.user[i].address,
    //     currentStar:props.user[i].currentStar,
    //     targets: props.user[i].targets,
    //   }
    //   data.push(tempt,1);
  // }

  const [state, setState] = React.useState({
    columns: [
      { title: "Họ & Tên", field: "name" },
      { title: "Email", field: "email", type: "email" },
      { title: "Điện Thoại", field: "phone" },
      {
        title: "Giới Tính",
        field: "gender",
        lookup: { true: "Nam", false: "Nữ" },
      },
      { title: "Ngày Sinh", field: "birth", type: "date" },
      { title: "Mật Khẩu", field: "password" },
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);
