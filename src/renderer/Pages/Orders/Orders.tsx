import { useMemo, StrictMode } from 'react';
import { Column, useTable } from 'react-table';

import { Table } from '../../Components/Table';

import { useOrder } from '../../Context';
import OrdersList from './OrderList/OrdersList';
import useOrders from './useOrders';
import ORDERS_COLUMNS from './OrdersColumns';
import { OrderTableRowDataType } from './Order';

// FIXME: redesign ui from the scratch.
const Orders = () => {
  const { orderList } = useOrder();
  const { orderData } = useOrders(orderList);
  const columns = useMemo(() => ORDERS_COLUMNS, []);
  const data = useMemo(() => orderData, []);
  return (
    <section id="orders">
      <header>
        <h1>Orders &#x21F5;</h1>
      </header>
      <StrictMode>
        <Table columns={columns} data={data} />
      </StrictMode>
    </section>
  );
};

export default Orders;

// TODO-1: Delete order and stage nav bar and its components
// TODO-2: Re-design the order section.
