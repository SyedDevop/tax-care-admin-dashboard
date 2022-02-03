/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Column } from 'react-table';

import { OrderTableRowDataType } from './Order';
import { formatTimestamp } from '../../Utils';
import OrderTableButton from './OrderTableButton';
import ColorTextWrapper from './ColorTextWrapper';

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
      return <ColorTextWrapper value={value} />;
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
    Cell: ({ row }) => (
      <OrderTableButton
        data={row}
        btnId="save"
        btnName="confirm"
        dbFiled="complete"
        btnDisableCheck={{ checkType: '!==', checkAgainst: 'conformation' }}
        Icon={DataSaverOnIcon}
      />
    ),
  },
  {
    Header: 'cancel',
    accessor: 'id',
    Cell: ({ row }) => (
      <OrderTableButton
        data={row}
        btnId="cancel"
        btnName="cancel "
        dbFiled="cancelled"
        btnDisableCheck={{ checkType: '===', checkAgainst: 'cancelled' }}
        Icon={HighlightOffIcon}
      />
    ),
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
