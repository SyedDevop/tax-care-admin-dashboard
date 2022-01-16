/* eslint-disable react/no-array-index-key */
import React from 'react';
// import { useTable } from 'react-table';

import { TableListRowsProps } from '../../Types';
import { Row, HeaderRow } from './Row';

export interface TableHeaderProps {
  headerRowData: string[];
}

export const TableHeader = ({ headerRowData }: TableHeaderProps) => {
  return (
    <thead>
      <tr role="row">
        <HeaderRow list={headerRowData} />
      </tr>
    </thead>
  );
};

export const TableListRows = ({
  bodyRowData,
  bodySubRows,
}: TableListRowsProps) => {
  return (
    <tbody>
      {bodyRowData.map((data, key) => {
        return (
          <>
            <Row key={key} rowData={data} dropDownData={bodySubRows} />
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
  return (
    <main id="table__section">
      <table id="table__default-style">{children}</table>
    </main>
  );
};
