/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-props-no-spreading */
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Column, Row } from 'react-table';

import { OrderTableRowDataType } from './Order';
import { OrderState, PaymentState } from '../../Enum';
import { formatTimestamp } from '../../Utils';
import { useDb } from '../../Hooks';
import { useOrder } from '../../Context';

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

const ConformButton = ({ data }: { data: Row<OrderTableRowDataType> }) => {
  const { putDoc } = useDb();
  const { id, states } = data.original;
  // const { refresh } = useOrder();
  return (
    <button
      type="button"
      id="order__btn--save"
      disabled={states !== 'conformation'}
      onClick={() => {
        putDoc({ 'orderStates.state': 'complete' }, id);
        // refresh.current = !refresh.current;
      }}
    >
      <DataSaverOnIcon />
      confirm
    </button>
  );
};
const CancelButton = ({ data }: { data: Row<OrderTableRowDataType> }) => {
  const { putDoc } = useDb();
  const { id, states } = data.original;
  // const { refresh } = useOrder();
  return (
    <button
      type="button"
      id="order__btn--cancel"
      disabled={states === 'cancelled'}
      onClick={() => {
        putDoc({ 'orderStates.state': 'cancelled' }, id);
        // refresh.current = !refresh.current;
      }}
    >
      <HighlightOffIcon />
      cancel
    </button>
  );
};

const ORDERS_COLUMNS: Column<OrderTableRowDataType>[] = [
  {
    Header: 'date',
    accessor: 'date',
    Cell: ({ value }) => formatTimestamp(new Date(value)),
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
    id: 'states-indication',
    accessor: 'states',
    Cell: ({ value }) => {
      return <Span value={value} />;
    },
  },
  {
    Header: 'amount',
    accessor: 'amount',
  },
  {
    Header: 'conform',
    accessor: 'states',
    id: 'states-conformation',
    Cell: ({ row }) => <ConformButton data={row} />,
  },
  {
    Header: 'cancel',
    accessor: 'id',
    Cell: ({ row }) => <CancelButton data={row} />,
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
