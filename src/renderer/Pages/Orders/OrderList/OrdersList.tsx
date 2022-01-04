import { Table } from '../../../Components/Table';

const OrdersList = () => {
  return (
    <Table
      headerRowData={[
        'created',
        'customer',
        'product',
        'state',
        'payment',
        'price',
      ]}
      bodyRowData={[
        [
          '12 jun 2021',
          'syed uzair ahmed',
          'ITR pack-2',
          'active',
          'pending',
          '7000 rs',
        ],
        [
          '12 jun 2021',
          'syed uzair ahmed',
          'ITR pack-2',
          'pending',
          'paid',
          '7000 rs',
        ],
        [
          '12 jun 2021',
          'syed uzair ahmed',
          'ITR pack-2',
          'active',
          'refunded',
          '7000 rs',
        ],
        [
          '12 jun 2021',
          'syed uzair ahmed',
          'ITR pack-2',
          'closed',
          'paid',
          '7000 rs',
        ],
      ]}
    />
  );
};

export default OrdersList;
