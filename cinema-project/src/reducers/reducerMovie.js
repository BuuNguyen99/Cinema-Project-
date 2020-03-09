import * as Types from '../constants/ActionTypes';

const stateDefault = {
  movie: []
};
  
  function reducerMovie(state = stateDefault.movie, action) {
    switch (action.type) {
      case Types.FETCH_DATA_MOVIE: {
        state = action.data
        return [...state];
      }
      // case Types.SEARCH_MOVIE: {

      // }
      default: {
        return [...state];
      }
  }
}

export default reducerMovie
  