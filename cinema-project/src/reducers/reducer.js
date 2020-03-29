import { combineReducers } from 'redux'
import reducerAdmin from './reducerAdmin'
import reducerMovie from './reducerMovie'
import reducerShowtimes from './reducerShowtimes'
import reducerTickets from './reducerTicket'
import reducerUsers from './reducerUsers'
import reducerFoods from './reducerFood'

const reducer = combineReducers({
    reducerMovie,
    reducerUsers,
    reducerAdmin,
    reducerShowtimes,
    reducerTickets,
    reducerFoods
});

export default reducer