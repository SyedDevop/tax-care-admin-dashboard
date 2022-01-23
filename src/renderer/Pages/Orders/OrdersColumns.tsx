/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-props-no-spreading */
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Column } from 'react-table';
import { OrderTableRowDataType } from './Order';

const Span = ({ value }: { value: string }) => <span>{value}</span>;

const ORDERS_COLUMNS: Column<OrderTableRowDataType>[] = [
  {
    // Make an expander cell
    Header: ({ getToggleAllRowsExpandedProps }) => (
      <span {...getToggleAllRowsExpandedProps()}>
        <MoreVertIcon />
      </span>
    ),
    id: 'expander',
    // @ts-ignore
    Cell: ({ row }) => (
      <span {...row.getToggleRowExpandedProps()}>
        {row.isExpanded ? '👇' : '👉'}
      </span>
    ),
  },
  {
    Header: 'date',
    accessor: 'date',
  },
  {
    Header: 'name',
    accessor: 'name',
  },
  {
    Header: 'plan type',
    accessor: 'planType',
  },
  {
    Header: 'states',
    accessor: 'states',
    Cell: ({ cell }) => {
      return <Span value={cell.value} />;
    },
  },
  {
    Header: 'payment',
    accessor: 'paymentState',
    Cell: ({ cell }) => {
      return <Span value={cell.value} />;
    },
  },
  {
    Header: 'amount',
    accessor: 'amount',
  },
];

export default ORDERS_COLUMNS;
