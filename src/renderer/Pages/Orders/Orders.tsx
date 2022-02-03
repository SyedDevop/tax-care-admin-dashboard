/* eslint-disable react/jsx-props-no-spreading */
import { useMemo, StrictMode, useCallback, useState, useEffect } from 'react';
import { Column } from 'react-table';

import { Table } from '../../Components/Table';
import { useOrder } from '../../Context';
import formatToOrderData from './FormatToOrderData';
import ORDERS_COLUMNS from './OrdersColumns';
import { OrderSubRow } from './OrderSubRow/OrderSubRow';
import { OrderTableRowDataType } from './Order';

// TODO: implement data fetching here

const Orders = () => {
  const { orderList } = useOrder();
  const columns = useMemo(() => ORDERS_COLUMNS, []);
  const data = useMemo(() => formatToOrderData(orderList), [orderList]);

  const renderRowSubComponent = useCallback(({ row }) => {
    return <OrderSubRow DropDownRowDatas={row.original} />;
  }, []);
  return (
    <section id="orders">
      <header>
        <h1>Orders</h1>
      </header>
      <StrictMode>
        <main className="orders__table">
          <Table {...{ columns, data, renderRowSubComponent }} />
        </main>
      </StrictMode>
    </section>
  );
};

export default Orders;
