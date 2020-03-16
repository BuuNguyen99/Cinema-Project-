import * as Types from "../constants/ActionTypes";

const stateDefault = {
  movie: {},
  choosing: {}
};

function reducerMovie(state = stateDefault, action) {
  let newState = {...state}
  switch (action.type) {
    case Types.FETCH_DATA_MOVIE: {
      newState.movie = action.movie;
      return newState;
    }
    case Types.RECEIVE_MOVIE_CHOOSING: {
      console.log('action in reducer:', action.movie, action.date, action.time)
      return {
        ...state,
        choosing: {
          movie: action.movie,
          date: action.date,
          time: action.time
        }
      }
    }
    default: {
      return state;
    }
  }
}

export default reducerMovie;
