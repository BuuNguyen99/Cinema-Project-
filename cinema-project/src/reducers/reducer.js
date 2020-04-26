import { combineReducers } from 'redux'
import reducerMovie from './reducerMovie'
import reducerUsers from './reducerUsers'
import reducerAdmin from './reducerAdmin'
import reducerShowtimes from './reducerShowtimes'
import reducerSupport from './reducerSupport'
import reducerTickets from './reducerTicket'
import reducerFoods from './reducerFood'
const reducer = combineReducers({
    reducerMovie,
    reducerUsers,
    reducerAdmin,
    reducerShowtimes,
    reducerSupport,
    reducerTickets,
    reducerFoods
});

export default reducer