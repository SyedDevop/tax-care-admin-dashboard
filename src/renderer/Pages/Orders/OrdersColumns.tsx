/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Column } from 'react-table';
import { OrderTableRowDataType } from './Order';

const Span = ({ value }: { value: string }) => <span>{value}</span>;

const ORDERS_COLUMNS: Column<OrderTableRowDataType>[] = [
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
    // eslint-disable-next-line react/prop-types
    Cell: ({ cell }) => {
      // eslint-disable-next-line react/prop-types
      return <Span value={cell.value} />;
    },
  },
  {
    Header: 'payment',
    accessor: 'paymentState',
    // eslint-disable-next-line react/prop-types
    Cell: ({ cell }) => {
      // eslint-disable-next-line react/prop-types
      return <Span value={cell.value} />;
    },
  },
  {
    Header: 'amount',
    accessor: 'amount',
  },

  {
    // Build our expander column
    id: 'subRow', // Make sure it has an ID
    // eslint-disable-next-line react/prop-types
    accessor: 'moreIcon',
    Header: <MoreVertIcon />,
    Cell: ({ row }: { row: any }) => (
      <span {...row.getToggleRowExpandedProps()}>
        {row.isExpanded ? '👇' : '👉'}
      </span>
    ),
  },
];

export default ORDERS_COLUMNS;
