import { useState } from 'react';
import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { Row } from 'react-table';
import { OrderTableRowDataType } from './Order';
import { useDb } from '../../Hooks';

export interface OrderTableButtonProp {
  data: Row<OrderTableRowDataType>;
  btnId: string;
  btnName: string;
  dbFiled: string;
  btnDisableCheck: {
    checkType: '!==' | '===';
    checkAgainst: string;
  };
  // eslint-disable-next-line @typescript-eslint/ban-types
  Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
}
const OrderTableButton = ({
  data,
  btnId,
  btnName,
  dbFiled,
  btnDisableCheck,
  Icon,
}: OrderTableButtonProp) => {
  const { putDoc } = useDb();
  const { id, states } = data.original;
  const [loadState, setLoadState] = useState(false);
  let disable = false;
  switch (btnDisableCheck.checkType) {
    case '!==':
      disable = states !== btnDisableCheck.checkAgainst;
      break;
    case '===':
      disable = states === btnDisableCheck.checkAgainst;
      break;
    default:
      break;
  }
  return (
    <button
      type="button"
      id={`order__btn--${btnId}`}
      disabled={disable}
      onClick={async () => {
        try {
          setLoadState((pre) => !pre);
          await putDoc({ 'orderStates.state': dbFiled }, id);
        } finally {
          setLoadState((pre) => !pre);
        }
      }}
    >
      <Icon />
      {!loadState ? btnName : 'load.....'}
    </button>
  );
};

export default OrderTableButton;
