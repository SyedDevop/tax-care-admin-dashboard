/* eslint-disable no-console */
import { useEffect, useState } from 'react';

import { Table, TableListRows, TableHeader } from '../../../Components/Table';
import { OrderTableRowDataType } from '../Order';
import { useSortableData } from '../../../Hooks';
import useOrders from '../useOrders';

const OrdersList = ({ orderList }: { orderList: OrderTableRowDataType[] }) => {
  const { items, requestSort } = useSortableData(orderList);
  // // const startingValue = orderData();
  console.log(orderList);
  console.log(items);

  return (
    <Table>
      <TableHeader
        headerRowData={[
          'date',
          'name',
          'planType',
          'states',
          'paymentState',
          'amount',
        ]}
        requestSortConfig={requestSort}
      />
      <TableListRows bodyRowData={items} />
    </Table>
  );
};

export default OrdersList;
