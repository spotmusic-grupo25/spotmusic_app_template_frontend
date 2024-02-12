import React from "react";
import { URL } from "./Path/url";
import { useAuth } from "../../validation/validations/useAuth";

interface PrivateRouterProps {
  children?: any;
  login?: any;
};

const PrivateRoute: React.FC<PrivateRouterProps> = (props) => {
  const auth = useAuth();
  return ( auth ? props.children : window.location.href = URL.routePublic.login);
}

export default PrivateRoute;