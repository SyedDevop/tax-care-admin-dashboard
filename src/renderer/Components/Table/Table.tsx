/* eslint-disable react/jsx-props-no-spreading */
// import React from 'react';
import React from 'react';
import {
  Column,
  useTable,
  useSortBy,
  useExpanded,
  useGlobalFilter,
  usePagination,
  
} from 'react-table';

import GlobalFilter from './Filter/GlobalFilter';
import Pagination from './Pagination/Pagination';

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
    canNextPage,
    canPreviousPage,
    getTableBodyProps,
    getTableProps,
    gotoPage,
    headerGroups,
    nextPage,
    page,
    pageOptions,
    prepareRow,
    previousPage,
    setGlobalFilter,
    state: { globalFilter, pageIndex, pageSize },
    visibleColumns,
  } = useTable(
    { columns, data },
    useGlobalFilter,
    useSortBy,
    useExpanded,
    usePagination
  );

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
            {page.map((row) => {
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
      <Pagination
        {...{
          canNextPage,
          canPreviousPage,
          gotoPage,
          nextPage,
          pageIndex,
          pageOptions,
          pageSize,
          previousPage,
        }}
        totalRows={data.length}
      />
    </>
  );
}
