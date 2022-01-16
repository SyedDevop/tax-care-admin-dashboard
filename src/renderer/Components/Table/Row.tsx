/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { RowProps } from '../../Types';
import { OrderState, PaymentState } from '../../Enum';
import { DropDownRow } from './Row/DropDownRow';

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

export const BodyRow = ({
  list,
  setDropDown,
  clickState,
}: {
  list: string[];
  setDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  clickState: boolean;
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
            setDropDown((pre) => !pre);
          }}
        >
          <ExpandMoreIcon
            className={
              clickState ? 'btn-arrow btn-arrow--clicked' : 'btn-arrow'
            }
          />
        </button>
      </td>
    </>
  );
};
export const Row = ({ rowData, dropDownData }: RowProps) => {
  const [dropDown, setDropDown] = React.useState(false);
  return (
    <>
      <tr role="row">
        <BodyRow
          list={rowData}
          setDropDown={setDropDown}
          clickState={dropDown}
        />
      </tr>
      <DropDownRow activeState={dropDown} DropDownRowDatas={dropDownData} />
    </>
  );
};
Row.defaultProps = {
  rowTypeHeader: false,
  className: '',
};
