import { Route, Switch } from 'react-router-dom';
import Nav from '../../Components/Nav/Nav';
import NotificationBar from '../../Components/NotificationBar/NotificationBar';
import Orders from '../Orders/Orders';

const Home = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route path="/orders" component={Orders} />
      </Switch>
      <NotificationBar />
    </>
  );
};

export default Home;
