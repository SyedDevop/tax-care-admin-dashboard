import { Table, OrderListRows, TableHeader } from '../../../Components/Table';

const OrdersList = () => {
  return (
    <Table>
      <TableHeader
        headerRowData={[
          'date',
          'client',
          'order',
          'stage',
          'payment',
          'amount',
        ]}
      />
      <OrderListRows
        bodyRowData={[
          [
            '12 jun 2021',
            'syed uzair ahmed',
            '1587936891',
            'complete',
            'paid',
            '7000 rs',
          ],
          [
            '12 jun 2021',
            'syed uzair ahmed',
            '1587936891',
            'conformation',
            'pending',
            '7000 rs',
            '',
          ],
          [
            '12 jun 2021',
            'syed uzair ahmed',
            '1587936891',
            'cancelled',
            'refunded',
            '7000 rs',
          ],
          [
            '12 jun 2021',
            'syed uzair ahmed',
            '1587936891',
            'active',
            'pending',
            '7000 rs',
          ],
        ]}
      />
    </Table>
  );
};

export default OrdersList;
