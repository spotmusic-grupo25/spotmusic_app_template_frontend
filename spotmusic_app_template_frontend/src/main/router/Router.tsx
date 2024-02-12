import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { URL } from "./Path/url";
import Home from "../../presentation/pages/home/Home";
import PrivateRoute from "./PrivateRouter";
import Login from "../../presentation/pages/login/Login";

const RouterViews = () => {
  return (
    <Router>
      <Routes>
        <Route path={URL.routePublic.home} element={<Home />} />
        <Route path={URL.routePublic.login} element={<Login />} />
        <Route
          path={URL.routerPrivate.home}
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default RouterViews;
