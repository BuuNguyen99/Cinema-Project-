import { combineReducers } from 'redux'
import reducerMovie from './reducerMovie'
import reducerUsers from './reducerUsers'
import reducerAdmin from './reducerAdmin'
import reducerShowtimes from './reducerShowtimes'
import reducerSupport from './reducerSupport'
const reducer = combineReducers({
    reducerMovie,
    reducerUsers,
    reducerAdmin,
    reducerShowtimes,
    reducerSupport
});

export default reducer