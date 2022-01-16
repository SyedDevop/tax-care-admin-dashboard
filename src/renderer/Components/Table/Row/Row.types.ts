import { ChangeEvent } from 'react';

export interface TextRowItemProps {
  title: string;
  text: string;
}

export interface CheckInputRowItemProps {
  title: string;
  handelCheck: (e: ChangeEvent<HTMLInputElement>) => void;
}
export interface DropDownRowData {
  rowDatas: TextRowItemProps[];
}

export interface DropDownRowProps {
  activeState: boolean;
  DropDownRowDatas: DropDownRowData[];
}
export interface RowProps {
  rowData: string[];
  // children?: React.ReactNode;
  dropDownData: DropDownRowData[];
}
export interface TableListRowsProps {
  bodyRowData: string[][];
  bodySubRows: DropDownRowData[];
}
