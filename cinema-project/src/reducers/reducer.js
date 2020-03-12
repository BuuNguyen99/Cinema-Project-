import { combineReducers } from 'redux'
import reducerMovie from './reducerMovie'
import reducerUsers from './reducerUsers'
import reducerAdmin from './reducerAdmin'

const reducer = combineReducers({
    reducerMovie,
    reducerUsers,
    reducerAdmin
});

export default reducer