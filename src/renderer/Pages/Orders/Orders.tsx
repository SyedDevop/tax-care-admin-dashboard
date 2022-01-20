import { useEffect, useState } from 'react';
import { OrderTableRowDataType } from './Order';
import OrdersList from './OrderList/OrdersList';
import Stage from './Stage/Stage';
import useOrders from './useOrders';

// FIXME: redesign ui from the scratch.
const Orders = () => {
  const { orderData } = useOrders();
  const [ordersList, setOrdersList] = useState<OrderTableRowDataType[]>([]);
  const LoadData = async () => {
    const getData = await orderData();
    setOrdersList(getData);
  };
  useEffect(() => {
    LoadData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <section id="orders">
      <header>
        <h1>Orders &#x21F5;</h1>
      </header>
      <OrdersList orderList={ordersList} />
    </section>
  );
};

export default Orders;

// TODO-1: Delete order and stage nav bar and its components
// TODO-2: Re-design the order section.
