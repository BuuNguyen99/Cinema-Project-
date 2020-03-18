import * as Types from "../constants/ActionTypes";

const stateDefault = {
  movie: [],
  movieShowing: [],
  movieComingSoon: [],
  searchMovie: [],
  choosing: {}
};

const isMovieShowing = (date) => {
  const now = new Date().setHours(0, 0, 0, 0);
  if(Date.parse(date) <= now) return true;
  else return false
}

function reducerMovie(state = stateDefault, action) {
  switch (action.type) {
    case Types.FETCH_DATA_MOVIE: {
      return {
        ...state,
        movie: action.movie,
        movieShowing: action.movie.filter(item => isMovieShowing(item.premiereDate)),
        movieComingSoon: action.movie.filter(item => !isMovieShowing(item.premiereDate))
      }
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
