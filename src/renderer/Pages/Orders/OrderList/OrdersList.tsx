/* eslint-disable no-console */
// import { useEffect, useState } from 'react';

import { OrderTableRowDataType } from '../Order';
// import { useSortableData } from '../../../Hooks';
// import useOrders from '../useOrders';

const OrdersList = ({ orderList }: { orderList: OrderTableRowDataType[] }) => {
  // const { items, requestSort } = useSortableData(orderList);
  return <hr />;
};

export default OrdersList;

const headerRowData = [
  'date',
  'name',
  'planType',
  'states',
  'paymentState',
  'amount',
];
