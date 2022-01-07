import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { OrderState, PaymentState } from '../../Enum';

export const OrderStates: Record<string, OrderState> = {
  complete: OrderState.complete,
  conformation: OrderState.conformation,
  cancelled: OrderState.cancelled,
};

export const PaymentStates: Record<string, PaymentState> = {
  paid: PaymentState.paid,
  pending: PaymentState.pending,
  refunded: PaymentState.refunded,
};
export interface RowProps {
  rowData: string[];
  rowTypeHeader?: boolean;
  className?: string;
  children?: React.ReactNode;
}
export const HeaderRow = ({ list }: { list: string[] }) => {
  return (
    <>
      <th>{list[0]}</th>
      <th>{list[1]}</th>
      <th>{list[2]}</th>
      <th>{list[3]}</th>
      <th>{list[4]}</th>
      <th>{list[5]}</th>
      <th className="expand-more--icon">
        <MoreVertIcon />
      </th>
    </>
  );
};
export const BodyRow = ({ list }: { list: string[] }) => {
  return (
    <>
      <td>{list[0]}</td>
      <td>{list[1]}</td>
      <td>{list[2]}</td>
      <td className={OrderStates[list[3]]}>
        <span>{list[3]}</span>
      </td>
      <td className={PaymentStates[list[4]]}>
        <span>{list[3]}</span>
      </td>
      <td>{list[5]}</td>
      <td>
        <ExpandMoreIcon />
      </td>
    </>
  );
};
export const Row = ({
  rowData,
  rowTypeHeader,
  className,
  children,
}: RowProps) => {
  return (
    <tr className={className}>
      {children}
      {rowTypeHeader ? (
        <HeaderRow list={rowData} />
      ) : (
        <BodyRow list={rowData} />
      )}
    </tr>
  );
};
Row.defaultProps = {
  rowTypeHeader: false,
  className: '',
};
