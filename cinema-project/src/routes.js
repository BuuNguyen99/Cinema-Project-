import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundFage/NotFoundPage';
import SearchPage from './pages/SearchPage/SearchPage';

const routes = [
    {
        path: '/',
        exact : true,
        main: () => <HomePage/>
    },
    {
        path: '',
        exact: false,
        main: () => <NotFoundPage/>
    },
    {
        path: '/search',
        exact: false,
        main: () => <SearchPage/>
    }
]

export default routes;