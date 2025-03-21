import {Navigate} from "react-router-dom";
import {AuthorizationStatus} from "../../const";
import {useAppSelector} from "../../hooks";

type PrivateRoutePros = {
  children: JSX.Element;
}

const PrivateRoute = ({children}: PrivateRoutePros):JSX.Element => {
  const authorizationStatus = useAppSelector(state => state.authorizationStatus);


  return authorizationStatus === AuthorizationStatus.Authorized ? children : <Navigate to="/login"/>
}

export default PrivateRoute;
