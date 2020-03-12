import * as Types from './../constants/ActionTypes';
import callApi from '../utils/ApiCaller'
import * as ApiCall  from '../utils/ApiCall';
import { object } from 'prop-types';

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
    console.log('key:', keyword)
    return (dispatch) => {
        return ApiCall.getSearchMovie({q: keyword}).then(res => {
            console.log('res:', res.data)
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

export function actSaveAccount(account) {
    return {
      type: Types.SAVE_ACCOUNT,
      account
    };
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

export const actRegisterUser = (user) => {
    return {
        type: Types.REGISTER_USER,
        user
    }

}
