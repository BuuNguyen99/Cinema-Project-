import * as Types from './../constants/ActionTypes';

const stateDefault = [];
  
  export function reducer(state = stateDefault, action) {
    switch (action.type) {
      case Types.FETCH_DATA_API:
        state = action.data
        return [...state];
        default:
          return [...state];
  }
}
  