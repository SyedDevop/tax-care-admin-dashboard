/* eslint-disable react/jsx-props-no-spreading */
// import React from 'react';
import React from 'react';
import { Column, useTable, useSortBy, useExpanded } from 'react-table';

export interface TableProps<D extends object> {
  classNameForRow?: string;
  // data: OrderTableRowDataType[];
  columns: ReadonlyArray<Column<D>>;
  data: readonly D[];
  renderRowSubComponent: ({ row }: any) => JSX.Element;
}
// eslint-disable-next-line @typescript-eslint/ban-types
export function Table<T extends object = {}>({
  columns,
  data,
  renderRowSubComponent,
}: TableProps<T>) {
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    rows,
    prepareRow,
    visibleColumns,
    state: { expanded },
  } = useTable({ columns, data }, useSortBy, useExpanded);

  return (
    <>
      <pre>
        <code>{JSON.stringify({ expanded }, null, 2)}</code>
      </pre>
      <table id="table__default-style" {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <React.Fragment key={row.getRowProps().key}>
                <tr>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
                {/* Sub Row start here */}
                {row.isExpanded ? (
                  <tr>
                    <td colSpan={visibleColumns.length}>
                      {renderRowSubComponent({ row })}
                    </td>
                  </tr>
                ) : null}
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
