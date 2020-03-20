import * as Types from "../constants/ActionTypes";

const stateDefault = {
  support: []
};

function reducerSupport(state = stateDefault, action) {
  let newState = { ...state };
  switch (action.type) {
    case Types.FETCH_DATA_SUPPORT: {
      newState.support = action.support;
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default reducerSupport;
