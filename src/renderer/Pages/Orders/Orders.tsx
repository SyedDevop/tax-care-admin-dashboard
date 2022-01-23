import { useMemo, StrictMode, useCallback } from 'react';

import { Table } from '../../Components/Table';
import { useOrder } from '../../Context';
import useOrders from './useOrders';
import ORDERS_COLUMNS from './OrdersColumns';
import { OrderSubRow } from './OrderSubRow/OrderSubRow';

import { OrderTableRowDataType } from './Order';

// FIXME: redesign ui from the scratch.
const Orders = () => {
  const { orderList } = useOrder();
  const { orderData } = useOrders(orderList);
  const columns = useMemo(() => ORDERS_COLUMNS, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => orderData, []);

  const renderRowSubComponent = useCallback(({ row }) => {
    return <OrderSubRow DropDownRowDatas={row.original} />;
  }, []);

  return (
    <section id="orders">
      <header>
        <h1>Orders &#x21F5;</h1>
      </header>
      <StrictMode>
        <Table
          columns={columns}
          data={data}
          renderRowSubComponent={renderRowSubComponent}
        />
      </StrictMode>
    </section>
  );
};

export default Orders;

// TODO-1: Delete order and stage nav bar and its components
// TODO-2: Re-design the order section.
