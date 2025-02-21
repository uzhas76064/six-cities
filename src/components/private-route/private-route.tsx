import {Navigate} from "react-router-dom";

type PrivateRoutePros = {
  children: JSX.Element;
}

const PrivateRoute = ({children}: PrivateRoutePros):JSX.Element => {
  const hasAccess = true;

  return hasAccess ? children : <Navigate to="/login"/>
}

export default PrivateRoute;
