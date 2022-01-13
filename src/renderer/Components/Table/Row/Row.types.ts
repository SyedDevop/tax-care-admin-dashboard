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
  RowItemData?: TextRowItemProps;
}
