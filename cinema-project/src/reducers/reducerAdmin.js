import * as Types from "../constants/ActionTypes";

const stateDefault = {
  admin: []
};

function reducerAdmin(state = stateDefault, action) {
  let newState = {...state}
  switch (action.type) {
    case Types.FETCH_DATA_ADMIN: {
      newState.admin = action.admin;
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default reducerAdmin;
