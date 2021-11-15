import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Rockets from './components/Rockets';
import Missions from './components/Missions';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Rockets />
        </Route>
        <Route path="/missions">
          <Missions />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
