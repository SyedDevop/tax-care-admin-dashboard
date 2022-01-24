/* eslint-disable react/jsx-props-no-spreading */
// import React from 'react';
import React from 'react';
import {
  Column,
  useTable,
  useSortBy,
  useExpanded,
  useGlobalFilter,
} from 'react-table';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { GlobalFilter } from './Filter/GlobalFilter';

export interface TableProps<D extends object> {
  classNameForRow?: string;
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
    state: { globalFilter },
    setGlobalFilter,
  } = useTable({ columns, data }, useGlobalFilter, useSortBy, useExpanded);

  return (
    <>
      <main className="table-body">
        <table className="table__default-style" {...getTableProps()}>
          <thead>
            <tr>
              <th colSpan={visibleColumns.length}>
                <GlobalFilter
                  filter={globalFilter}
                  setFilter={setGlobalFilter}
                />
              </th>
            </tr>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()} style={{ maxHeight: '100px' }}>
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
                    <tr className="drop-down">
                      <td
                        id="drop-down__row"
                        className="drop-down__row--shown"
                        colSpan={visibleColumns.length}
                      >
                        {renderRowSubComponent({ row })}
                      </td>
                    </tr>
                  ) : null}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </main>
      <div className="page--select">
        <div>1-5 of 30</div>
        <div>
          <div>
            <p>the page you&rsquo;re on</p>
            <input type="number" name="page-number" defaultValue={1} />
          </div>
          <hr />
          <div className="page--select__btn">
            <button type="button" className="page--select__pre">
              <ArrowBackIcon />
            </button>
            <button type="button" className="page--select__next">
              <ArrowForwardIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
