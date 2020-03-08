import * as Types from './../constants/ActionTypes';

export const  actFetchDataApi = (data) => {
    return {
        type: Types.FETCH_DATA_API,
        data
    }
}