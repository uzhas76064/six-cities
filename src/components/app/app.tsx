import { Main } from '../../pages/main/main';
import {Route, Routes} from "react-router-dom";
import {Login} from "../../pages/login/login";
import Layout from "../layout/layout";
import {Favorites} from "../../pages/favorites/favorites";
import NotFound from "../../pages/not-found/not-found";
import {Room} from "../../pages/room/room";
import PrivateRoute from "../private-route/private-route";
import {Offer} from "../../types/Offer";

type OfferProps = {
  offers: Offer[];
}

function App({offers}: OfferProps): JSX.Element {
  return (
  <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Main offers={offers} offersCount={offers.length} />}/>
      <Route path="login" element={<Login/>}/>
      <Route path="favorites" element={
        <PrivateRoute>
          <Favorites favorites={offers}/>
        </PrivateRoute>
      }/>
      <Route path="offer/:id" element={
        <PrivateRoute>
          <Room/>
        </PrivateRoute>
      }/>
    </Route>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
)
}

export default App;
