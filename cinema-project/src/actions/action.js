import * as Types from './../constants/ActionTypes';
import * as apiCall from '../utils/ApiCall'
import { object } from 'prop-types';

// export const  actFetchDataMovieRequest = () => {
//     return (dispatch) => {
//         return apiCall.getAllDataMovie().then(res => {
//             dispatch(actFetchDataMovie(res.data))
//         })
//     }
// }

export const actFetchDataMovie = (data) => {
    return {
        type: Types.FETCH_DATA_MOVIE,
        data
    }
}

export const  actSearchMovieRequest = (keyword) => {
    console.log('key:', keyword)
    return (dispatch) => {
        return apiCall.getSearchMovie({q: keyword}).then(res => {
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