import * as Types from "../constants/ActionTypes";

const stateDefault = {
  users: [],
  registerUser: [],
  account: []
};

function reducerUsers(state = stateDefault, action) {
  let newState = { ...state } ;
  switch (action.type) {
    case Types.REGISTER_USER: {
      newState.registerUser.push(action.user);
      return newState;
    }

    case Types.FETCH_DATA_USERS: {
      newState.users = action.users;
      return newState;
    }

    default: {
      return state;
    }
  }
}

export default reducerUsers;
