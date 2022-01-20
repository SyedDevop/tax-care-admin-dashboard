import React from 'react';
// import { useTable } from 'react-table';

import { OrderTableRowDataType, TableListRowsProps } from '../../Types';
import { Row, HeaderRow } from './Row';

export interface TableHeaderProps {
  headerRowData: string[];
  requestSortConfig: (key: keyof OrderTableRowDataType) => void;
}

export const TableHeader = ({
  headerRowData,
  requestSortConfig,
}: TableHeaderProps) => {
  return (
    <thead>
      <tr role="row">
        <HeaderRow list={headerRowData} sortConfig={requestSortConfig} />
      </tr>
    </thead>
  );
};

export const TableListRows = ({ bodyRowData }: TableListRowsProps) => {
  return (
    <tbody>
      {bodyRowData.map((rowData) => {
        return (
          <>
            <Row key={rowData.id} rowData={rowData} />
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
