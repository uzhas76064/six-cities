import { Main } from '../../pages/main/main';
import {Route, Routes} from "react-router-dom";
import {Login} from "../../pages/login/login";
import Layout from "../layout/layout";
import {Favorites} from "../../pages/favorites/favorites";
import NotFound from "../../pages/not-found/not-found";

type AppProps = {
  offersCount: number
}

function App({ offersCount }: AppProps): JSX.Element {
  return (
  <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Main offersCount={offersCount} />}/>
      <Route path="login" element={<Login/>}/>
      <Route path="favorites" element={<Favorites/>}/>
      <Route path="offer/:id"/>
    </Route>
    <Route path="*" element={<NotFound/>}/>
  </Routes>
)
}

export default App;
