import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './Routes/PrivateRoute';
import Login from './Pages/Login/Login';
import './core-ui/index.scss';
import Home from './Pages/Home/Home';

export default function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/">
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}
