import { combineReducers } from 'redux'
import reducerMovie from './reducerMovie'
import reducerUsers from './reducerUsers'
import reducerAdmin from './reducerAdmin'
import reducerShowtimes from './reducerShowtimes'

const reducer = combineReducers({
    reducerMovie,
    reducerUsers,
    reducerAdmin,
    reducerShowtimes
});

export default reducer