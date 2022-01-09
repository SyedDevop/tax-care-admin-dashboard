/* eslint-disable react/no-array-index-key */
import React from 'react';
import { useTable } from 'react-table';

import { Row } from './Row';

export interface TableHeaderProps {
  headerRowData: string[];
}

export const TableHeader = ({ headerRowData }: TableHeaderProps) => {
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
        return (
          <>
            <Row key={key} rowData={data} />
          </>
        );
      })}
    </tbody>
  );
};

export interface TableProps {
  classNameForRow?: string;
  children: React.ReactNode;
}
export const Table = ({ children }: TableProps) => {
  return <table id="table__default-style">{children}</table>;
};
