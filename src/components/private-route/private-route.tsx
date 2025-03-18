import {Navigate} from "react-router-dom";
import {useAppSelector} from "../../hooks/hooks";
import {AuthorizationStatus} from "../../const";

type PrivateRoutePros = {
  children: JSX.Element;
}

const PrivateRoute = ({children}: PrivateRoutePros):JSX.Element => {
  const authorizationStatus = useAppSelector(state => state.authorizationStatus);


  return authorizationStatus === AuthorizationStatus.Authorized ? children : <Navigate to="/login"/>
}

export default PrivateRoute;
