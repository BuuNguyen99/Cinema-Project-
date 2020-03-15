import * as Types from "../constants/ActionTypes";

const stateDefault = {
  movie: {}
};

function reducerMovie(state = stateDefault, action) {
  let newState = {...state}
  switch (action.type) {
    case Types.FETCH_DATA_MOVIE: {
      newState.movie = action.movie;
      return newState;
    }
    default: {
      return state;
    }
  }
}

export default reducerMovie;
