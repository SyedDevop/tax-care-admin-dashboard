import OrdersList from './OrderList/OrdersList';
import Stage from './Stage/Stage';

// FIXME: redesign ui from the scratch.
const Orders = () => {
  return (
    <section id="orders">
      <div className="orders__header">
        <header>
          <h1>Orders &#x21F5;</h1>
        </header>
        <OrdersList />
      </div>
    </section>
  );
};

export default Orders;

// TODO-1: Delete order and stage nav bar and its components
// TODO-2: Re-design the order section.
