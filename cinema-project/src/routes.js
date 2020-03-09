import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SearchPage from "./pages/SearchPage/SearchPage";

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />
  },
  {
    path: "/search",
    exact: false,
    main: () => <SearchPage />
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />
  }
];

export default routes;
