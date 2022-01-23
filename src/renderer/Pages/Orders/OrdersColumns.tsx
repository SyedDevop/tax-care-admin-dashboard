/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-props-no-spreading */
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Column } from 'react-table';

import { OrderTableRowDataType } from './Order';
import { OrderState, PaymentState } from '../../Enum';

export const OrderStates: Record<string, OrderState> = {
  complete: OrderState.complete,
  conformation: OrderState.conformation,
  cancelled: OrderState.cancelled,
};

export const PaymentStates: Record<string, PaymentState> = {
  paid: PaymentState.paid,
  conformation: PaymentState.pending,
  refunded: PaymentState.refunded,
};

const isClassName = (name: string) => {
  return OrderStates[name] || PaymentStates[name] || '';
};

const Span = ({ value }: { value: string }) => (
  <span className={isClassName(value)}>{value}</span>
);

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
        <ExpandMoreIcon
          className={
            row.isExpanded
              ? 'expanded-arrow expanded-arrow--clicked'
              : 'expanded-arrow'
          }
        />
      </span>
    ),
  },
];

export default ORDERS_COLUMNS;
