/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
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

const DropDownRow = ({ state }: { state: boolean }) => {
  return (
    <td
      id="drop-down__row"
      className={(state && 'drop-down__row--shown') || ''}
      colSpan={7}
      role="cell"
    >
      <div style={{ display: 'flex' }}>
        <h3>hi</h3>
        <h3>jku</h3>
        <h3>hhujf</h3>
        <hr />
        <h3>l;;lkll</h3>
        <h3>nkjhlkjhlkj</h3>
        <h3>jkhkljhlkj</h3>
        <hr />
        <h3>jkhljkhljk</h3>
        <h3>jkjklhj</h3>
        <h3>jkhkljhlkj</h3>
        <hr />
      </div>
    </td>
  );
};

export const BodyRow = ({
  list,
  setdropDown,
  state,
}: {
  list: string[];
  setdropDown: React.Dispatch<React.SetStateAction<boolean>>;
  state: boolean;
}) => {
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
        <button
          type="button"
          className="btn-drop-down"
          onClick={() => {
            console.log('click');
            setdropDown((pre) => !pre);
          }}
        >
          <ExpandMoreIcon />
        </button>
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
  const [dropDown, setdropDown] = React.useState(false);
  return (
    <>
      <tr role="row" className={className}>
        {children}
        {rowTypeHeader ? (
          <>
            <HeaderRow list={rowData} />
          </>
        ) : (
          <BodyRow list={rowData} setdropDown={setdropDown} state={dropDown} />
        )}
      </tr>
      <tr>
        <DropDownRow state={dropDown} />
      </tr>
    </>
  );
};
Row.defaultProps = {
  rowTypeHeader: false,
  className: '',
};
