const Row = ({
  rowData,
  rowTypeHeader,
}: {
  rowData: string[];
  rowTypeHeader?: boolean;
}) => {
  return (
    <tr>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {rowData.map((data) => {
        return <>{rowTypeHeader ? <th>{data}</th> : <td>{data}</td>}</>;
      })}
    </tr>
  );
};
Row.defaultProps = {
  rowTypeHeader: false,
};

const OrdersListHeader = ({ headerRowData }: { headerRowData: string[] }) => {
  return (
    <thead>
      <Row rowData={headerRowData} rowTypeHeader />
    </thead>
  );
};
const OrderListRows = ({ bodyRowData }: { bodyRowData: string[] }) => {
  return (
    <tbody>
      <Row rowData={bodyRowData} />
    </tbody>
  );
};

const OrdersList = () => {
  return (
    <table id="orders__table">
      <OrdersListHeader
        headerRowData={[
          'created',
          'customer',
          'product',
          'state',
          'payment',
          'price',
        ]}
      />
      <OrderListRows
        bodyRowData={[
          '12 jun 2021',
          'syed uzair ahmed',
          'ITR pack-2',
          'active',
          'paid',
          '7000 rs',
        ]}
      />
    </table>
  );
};

export default OrdersList;
