import Main from '../main/main';
import {AppProps} from '../../types/interfaces';

function App({places}: AppProps): JSX.Element {
  return (
    <Main places={places}/>
  );
}

export default App;
