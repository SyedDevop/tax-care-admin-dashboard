import {
  NavLink,
  Route,
  Switch,
  useParams,
  useRouteMatch,
} from 'react-router-dom';
import OrdersList from './OrderList/OrdersList';
import Stage from './Stage/Stage';

const Tab = () => {
  const { tabId } = useParams<{ tabId: string }>();
  return <>{tabId === 'stage' ? <Stage /> : <OrdersList />}</>;
};

const Orders = () => {
  const { path, url } = useRouteMatch();

  return (
    <section id="orders">
      <nav className="orders__nav">
        <NavLink activeClassName="selected" to={`${url}/order`}>
          orders
        </NavLink>
        <NavLink activeClassName="selected" to={`${url}/stage`}>
          stage
        </NavLink>
      </nav>
      <Switch>
        <Route exact path={`${path}/:tabId`} component={Tab} />
      </Switch>
    </section>
  );
};

export default Orders;
