import { ChangeEvent } from 'react';
import { OrderTableRowDataType } from '../Pages/Orders/Order';

export interface TextRowItemProps {
  title: string;
  text: string;
}

export interface CheckInputRowItemProps {
  title: string;
  handelCheck: (e: ChangeEvent<HTMLInputElement>) => void;
  inputId: string;
}
export interface DropDownRowContentProps {
  rowDatas: OrderTableRowDataType;
}

export interface DropDownRowProps {
  activeState?: boolean;
  DropDownRowDatas: OrderTableRowDataType;
}
export interface RowProps {
  rowData: OrderTableRowDataType;
}
export interface TableListRowsProps {
  bodyRowData: OrderTableRowDataType[];
}

export interface BodyRowProps extends RowProps {
  setDropDown: React.Dispatch<React.SetStateAction<boolean>>;
  clickState: boolean;
}
