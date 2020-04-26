import * as Types from './../constants/ActionTypes';
import callApi from '../utils/ApiCaller'
import * as ApiCall  from '../utils/ApiCall';
import { object } from 'prop-types';

import history from '../commons/history';

// Get data movie
export const  actFetchDataMovieRequest = () => {
    return (dispatch) => {
        return callApi('movie','GET', null).then (res => {
            dispatch(actFetchDataMovie(res.data))
        });
    }
}

export const actFetchDataMovie = (movie) => {
    return {
        type: Types.FETCH_DATA_MOVIE,
        movie
    }
}
// act search movie
export const  actSearchMovieRequest = (keyword) => {
    return (dispatch) => {
        return ApiCall.getSearchMovie({q: keyword}).then(res => {
            dispatch(actFetchDataMovie(res.data))
        })
    }
}

export const  actSearchMovie = (data) => {
    return {
        type: Types.SEARCH_MOVIE,
        data
    }
}

// Get data admin
export const  actFetchDataAdminRequest = () => {
    return (dispatch) => {
        return callApi('admin','GET', null).then (res => {
            dispatch(actFetchDataAdmin(res.data))
        });
    }
}

export const actFetchDataAdmin = (admin) => {
    return {
        type: Types.FETCH_DATA_ADMIN,
        admin
    }
}

//get data users
export const  actFetchDataUsersRequest = () => {
    return (dispatch) => {
        return callApi('users','GET', null).then (res => {
            dispatch(actFetchDataUsers(res.data))
        });
    }
}

export const actFetchDataUsers = (users) => {
    return {
        type: Types.FETCH_DATA_USERS,
        users
    }
}



//Post register user
export const actRegisterUserRequest = (user) => {
        return (dispatch) => {
            return callApi('users', 'POST', user).then(res => {
                dispatch(actRegisterUser(res.data))
            });
        }
} 

export const  actFetchDataAccountRequest = () => {
    return (dispatch) => {
        return callApi('account','GET', null).then (res => {
            if(res.status === 200) {
                dispatch(actFetchDataAccount(res.data))
            } else alert('Không thể kết nối đến dữ liệu!')
        });
    }
}

export const actFetchDataAccount = (account) => {
    return {
        type: Types.FETCH_DATA_ACCOUNT,
        account
    }
}

export const actRegisterUser = (user) => {
    return {
        type: Types.REGISTER_USER,
        user
    }

}

export const actLoginAccountRequest = (account) => {
    return (dispatch) => {
        return callApi('account', 'POST', account).then(res => {
            dispatch(actLoginAccount(res.data))
        });
    }
} 

export const actLoginAccount = (account) => {
return {
    type: Types.SAVE_ACCOUNT,
    account
}

}

export const actDeleteAccountRequest = (id) => {
    return dispatch => {
        return callApi(`account/${id}`, 'DELETE', null).then(res => {
            dispatch( actDeleteAccount(id))
        })
    }
}

export const actDeleteAccount = (id) => {
    return {
        type: Types.DELETE_ACCOUNT,
        id
    }
}

// act fetch showtimes
export const  actFetchShowtimesRequest = () => {
    return (dispatch) => {
        return ApiCall.getShowtimes().then(res => {
            if(res.status === 200) {
                dispatch(actFetchShowtimes(res.data))
            } else alert('Không thể kết nối dữ liệu!')
        })
    }
}

export const  actFetchShowtimes = (data) => {
    return {
        type: Types.FETCH_SHOWTIMES,
        data
    }
}

// act receive moving choosing
export const actReceiveMovieChoosing = (movie, date, time, idUser) => {
    return {
        type: Types.RECEIVE_MOVIE_CHOOSING,
        movie,
        date,
        time,
        idUser
    }
}

export const  actFetchDataSupportRequest = () => {
    return (dispatch) => {
        return callApi('support','GET', null).then (res => {
            dispatch(actFetchDataSupport(res.data))

        });
    }
}

export const actFetchDataSupport = (support) => {
    return {
        type: Types.FETCH_DATA_SUPPORT,
        support
    }
}

export const actCreateBookingRequest = (data) => {
    return (dispatch) => {
        return callApi('Booking','POST', data).then(res => {
            if(res.status === 200 || res.status === 201) {
                alert('Đặt vé thành công!')
                history.push('/')
                dispatch(actCreateBooking(res.data))
            } else alert('Không thể kết nối dữ liệu!')
        })
    }
}

export const actCreateBooking = (data) => {
    return {
        type: Types.CREATE_BOOKING,
        data
    }
}


export function addMovieInformation(movie) {
    return {
      type: Types.SHOW_INFORMATION_MOVIE,
      movie
    };
  }


  export const actRatingItemMovieRequest = (movie) => {
      return dispatch => {
        return callApi(`movie/${movie.id}`, 'PUT' , movie).then(res => {
            dispatch(actRatingItemMovie(res.data));
        })
      }
  }


  export const actRatingItemMovie = (movie) => {
    return {
        type: Types.RATING_ITEM_MOVIE,
        movie
    }
  }

  // act receive data food
export const  actFetchDataFoodRequest = () => {
    return (dispatch) => {
        return ApiCall.getFoods().then(res => {
            if(res.status === 200) {
                dispatch(actFetchDataData(res.data))
            } else alert('Không thể kết nối dữ liệu!')
        })
    }
}

export const actFetchDataData = (data) => {
    return {
        type: Types.FETCH_DATA_FOOD,
        data
    }
}

// act receive data ticket
export const  actFetchDataTicketRequest = () => {
    return (dispatch) => {
        return ApiCall.getTickets().then(res => {
            if(res.status === 200) {
                dispatch(actFetchDataTicket(res.data))
            } else alert('Không thể kết nối dữ liệu!')
        })
    }
}

export const actFetchDataTicket = (data) => {
    return {
        type: Types.FETCH_DATA_TICKETS,
        data
    }
}
