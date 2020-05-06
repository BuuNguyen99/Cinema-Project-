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


export const actRegisterUserRequest = (user) => {
    return (dispatch) => {
        return callApi('users', 'POST', user).then(res => {
            dispatch(actRegisterUser(res.data))
        });
    }
} 


export const actRegisterUser = (user) => {
    return {
        type: Types.REGISTER_USER,
        user
    }

}

export const actAddUserRequest = (user) => {
    return (dispatch) => {
        return callApi('users', 'POST', user).then(res => {
            dispatch(actAddUser(res.data))
        });
    }
} 


export const actAddUser = (user) => {
    return {
        type: Types.ADD_USER,
        user
    }

}

export const actUpdateUserRequest = (users) => {
    return dispatch => {
      return callApi(`users/${users.id}`, 'PUT' , users).then(res => {
          dispatch(actUpdateUser(res.data));
      })
    }
}


export const actUpdateUser = (user) => {
  return {
      type: Types.UPDATE_USER,
      user
  }
}

export const actDeleteUserRequest = (id) => {
    return dispatch => {
        return callApi(`users/${id}`, 'DELETE', null).then(res => {
            dispatch( actDeleteUser(id))
        })
    }
}

export const actDeleteUser = (id) => {
    return {
        type: Types.DELETE_USER,
        id
    }
}


export const actUpdateAccountRequest = (account) => {
    return dispatch => {
      return callApi(`account/${account.id}`, 'PUT' , account).then(res => {
          dispatch(actUpdateAccount(res.data));
      })
    }
}


export const actUpdateAccount = (account) => {
  return {
      type: Types.UPDATE_ACCOUNT,
      account
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
        return callApi('booking','POST', data).then(res => {
            if(res.status === 200 || res.status === 201) {
                alert('Đặt vé thành công, chúng tôi đã gửi mã QR code qua điện thoại của bạn, vui lòng đem mã số này đến quầy để nhận vé!')
                dispatch(actCreateBooking(res.data))
                history.push('/');
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



  export const actRatingItemReviewMovieRequest = (reviewMovie) => {
    return dispatch => {
      return callApi(`reviewMovie/${reviewMovie.id}`, 'PUT' , reviewMovie).then(res => {
          dispatch(actRatingItemReviewMovie(res.data));
      })
    }
}


export const actRatingItemReviewMovie = (reviewMovie) => {
  return {
      type: Types.RATING_ITEM_REVIEW_MOVIE,
      reviewMovie
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


export const  actFetchDataTheaterRequest = () => {
    return (dispatch) => {
        return callApi('theater','GET', null).then (res => {
            if(res.status === 200) {
                dispatch(actFetchDataTheater(res.data))
            } else alert('Không thể kết nối đến dữ liệu!')
        });
    }
}

export const actFetchDataTheater = (theater) => {
    return {
        type: Types.FETCH_DATA_THEATER,
        theater
    }
}

export const  actFetchDataPromotionRequest = () => {
    return (dispatch) => {
        return callApi('promotion','GET', null).then (res => {
            if(res.status === 200) {
                dispatch(actFetchDataPromotion(res.data))
            } else alert('Không thể kết nối đến dữ liệu!')
        });
    }
}

export const actFetchDataPromotion = (promotion) => {
    return {
        type: Types.FETCH_DATA_PROMOTION,
        promotion
    }
}

export const actFetchDataBooking = (data) => {
    return {
        type: Types.GET_BOOKING,
        data
    }
}

export const  actFetchDataReviewMovieRequest = () => {
    return (dispatch) => {
        return callApi('reviewMovie','GET', null).then (res => {
            if(res.status === 200) {
                dispatch(actFetchDataReviewMovie(res.data))
            } else alert('Không thể kết nối đến dữ liệu!')
        });
    }
}

export const actFetchDataReviewMovie = (reviewMovie) => {
    return {
        type: Types.FETCH_DATA_REVIEW_MOVIE,
        reviewMovie
    }
}




export const  actFetchDataBookingMovieRequest = () => {
    return (dispatch) => {
        return callApi('booking','GET', null).then (res => {
            if(res.status === 200) {
                dispatch(actFetchDataBookingMovie(res.data))
            } else alert('Không thể kết nối đến dữ liệu!')
        });
    }
}

export const actFetchDataBookingMovie = (bookingMovie) => {
    return {
        type: Types.FETCH_DATA_BOOKING_MOVIE,
        bookingMovie
    }
}



