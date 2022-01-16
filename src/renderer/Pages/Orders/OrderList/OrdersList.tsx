import { Table, TableListRows, TableHeader } from '../../../Components/Table';
// import { useOrder } from '../../../Context';

const OrdersList = () => {
  // const { orderData } = useOrder();
  // console.log(orderData);

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
      <TableListRows
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
        bodySubRows={[
          {
            rowDatas: [
              { title: 'client', text: 'new' },
              { title: 'phone no', text: '8050318651' },
              { title: 'email', text: 'syeduzairahmed70@gmail.com' },
            ],
          },
          {
            rowDatas: [
              { title: 'pack', text: 'TCI' },
              { title: 'addon', text: 'hello/name' },
              { title: 'discount', text: '00.00 rs' },
              { title: 'amount', text: '7000 rs' },
            ],
          },
        ]}
      />
    </Table>
  );
};

export default OrdersList;
