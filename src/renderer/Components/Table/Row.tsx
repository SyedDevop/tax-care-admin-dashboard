import React, { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { numberToCurrency } from '../../Utils';
import { RowProps, BodyRowProps, OrderTableRowDataType } from '../../Types';
import { OrderState, PaymentState } from '../../Enum';
import { DropDownRow } from './Row/DropDownRow';

export const OrderStates: Record<string, OrderState> = {
  complete: OrderState.complete,
  conformation: OrderState.conformation,
  cancelled: OrderState.cancelled,
};

export const PaymentStates: Record<string, PaymentState> = {
  paid: PaymentState.paid,
  conformation: PaymentState.pending,
  refunded: PaymentState.refunded,
};
export const HeaderRow = ({
  list,
  sortConfig,
}: {
  list: string[];
  sortConfig: (key: keyof OrderTableRowDataType) => void;
}) => {
  return (
    <>
      {list.map((listData) => {
        return (
          <th
            onClick={() => {
              sortConfig(listData as keyof OrderTableRowDataType);
            }}
          >
            {listData}
          </th>
        );
      })}
      <th className="expand-more--icon">
        <MoreVertIcon />
      </th>
    </>
  );
};

export const BodyRow = ({ rowData, setDropDown, clickState }: BodyRowProps) => {
  return (
    <>
      <td>{rowData.date}</td>
      <td>{rowData.name}</td>
      <td>
        {rowData.planType}
        <span className="sub-text"> ({rowData.planId})</span>
      </td>
      <td className={OrderStates[rowData.states]}>
        <span>{rowData.states}</span>
      </td>
      <td className={PaymentStates[rowData.paymentState]}>
        <span>{rowData.paymentState}</span>
      </td>
      <td>{numberToCurrency(rowData.amount)}</td>
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
export const Row = ({ rowData }: RowProps) => {
  const [dropDown, setDropDown] = React.useState(false);
  return (
    <>
      <tr role="row">
        <BodyRow
          rowData={rowData}
          setDropDown={setDropDown}
          clickState={dropDown}
        />
      </tr>
      <DropDownRow activeState={dropDown} DropDownRowDatas={rowData} />
    </>
  );
};
Row.defaultProps = {
  rowTypeHeader: false,
  className: '',
};
