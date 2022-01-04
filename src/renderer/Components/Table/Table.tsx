/* eslint-disable react/no-array-index-key */
import { OrderState, PaymentState } from '../../Enum';

export interface RowProps {
  rowData: string[];
  rowTypeHeader?: boolean;
  className?: string;
}

const OrderStates: Record<string, OrderState> = {
  active: OrderState.active,
  pending: OrderState.pending,
  closed: OrderState.closed,
};

const PaymentStates: Record<string, PaymentState> = {
  paid: PaymentState.paid,
  pending: PaymentState.pending,
  refunded: PaymentState.refunded,
};

export const Row = ({ rowData, rowTypeHeader, className }: RowProps) => {
  return (
    <tr className={className}>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {rowData.map((data: string, key) => {
        return (
          <>
            {rowTypeHeader ? (
              <th key={key}>{data}</th>
            ) : (
              <td
                key={key}
                className={`${OrderStates[data] || PaymentStates[data] || ''}`}
              >
                {data}
              </td>
            )}
          </>
        );
      })}
    </tr>
  );
};
Row.defaultProps = {
  rowTypeHeader: false,
  className: '',
};

export interface OrdersListHeaderProps {
  headerRowData: string[];
}

export const OrdersListHeader = ({ headerRowData }: OrdersListHeaderProps) => {
  return (
    <thead>
      <Row rowData={headerRowData} rowTypeHeader />
    </thead>
  );
};

export interface OrderListRowsProps {
  bodyRowData: string[][];
}
export const OrderListRows = ({ bodyRowData }: OrderListRowsProps) => {
  return (
    <tbody>
      {bodyRowData.map((data, key) => {
        return <Row key={key} rowData={data} />;
      })}
    </tbody>
  );
};

export interface TableProps {
  classNameForRow?: string;
  bodyRowData: OrderListRowsProps['bodyRowData'];
  headerRowData: OrdersListHeaderProps['headerRowData'];
}
export const Table = ({ bodyRowData, headerRowData }: TableProps) => {
  return (
    <table id="table__default-style">
      <OrdersListHeader headerRowData={headerRowData} />
      <OrderListRows bodyRowData={bodyRowData} />
    </table>
  );
};
