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
  const [allOrders, setAllOrders] = useState<OrderTableRowDataType[]>([]);

  const columns = useMemo(() => ORDERS_COLUMNS, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data = useMemo(() => allOrders, []);

  const renderRowSubComponent = useCallback(({ row }) => {
    return <OrderSubRow DropDownRowDatas={row.original} />;
  }, []);

  interface OrderTableProps {
    columns: Column<OrderTableRowDataType>[];
    data: OrderTableRowDataType[];
    renderRowSubComponent: ({ row }: any) => JSX.Element;
  }

  const OrderTable = useCallback((tableData: OrderTableProps) => {
    return (
      <main className="orders__table">
        <Table {...tableData} />
      </main>
    );
  }, []);

  // const forMateData = () => useOrders(orderList);
  useEffect(() => {
    const { orderData } = formatToOrderData(orderList);
    setAllOrders(orderData);
  }, []);

  return (
    <section id="orders">
      <header>
        <h1>Orders</h1>
      </header>
      <StrictMode>
        {/* <main className="orders__table">
          <Table
            columns={columns}
            data={data}
            renderRowSubComponent={renderRowSubComponent}
          />
        </main> */}
        <OrderTable {...{ columns, data, renderRowSubComponent }} />
      </StrictMode>
    </section>
  );
};

export default Orders;
