import React from 'react';
import ManageUsers from './ManageUsers';
import AddUsers from './AddUsers';
import UpdateUsers from './UpdateUsers';
const routeAdmin = [
    {
        path: '/admin-page',
        exact : true,
        main: ({history}) => <ManageUsers history={history}/>
    },
    {
        path: '/admin-page/addUsers',
        exact: false,
        main: ({history}) => <AddUsers history={history}/>
    },
    {
        path: '/admin-page/updateUsers',
        exact: false,
        main: ({history}) => <UpdateUsers history={history}/>
    },
]

export default routeAdmin;