import { ChangeEvent, useEffect, useState } from 'react';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { isAny, numberToCurrency } from '../../../Utils';
import {
  TextRowItemProps,
  CheckInputRowItemProps,
  DropDownRowProps,
  DropDownRowContentProps,
  OrderTableRowDataType,
} from '../../../Types';

const TextRowItem = ({ title, text }: TextRowItemProps) => {
  return (
    <div className="drop-down__content--card--line">
      <h3 className="key">{title}</h3>
      <h3 className="value">{text}</h3>
    </div>
  );
};

const ClientDetailColumn = ({
  columnData: { row1 },
}: {
  columnData: OrderTableRowDataType['subRow'];
}) => {
  return (
    <div className="drop-down__content--card">
      <TextRowItem title="client" text={row1.client} />
      <TextRowItem title="phone no" text={row1.phone} />
      <TextRowItem title="email" text={row1.email} />
    </div>
  );
};

const CheckInputRowItem = ({
  title,
  handelCheck,
  inputId,
}: CheckInputRowItemProps) => {
  return (
    <div className="drop-down__content--card--line">
      <label htmlFor={`order--${inputId}`}>{title}</label>
      <input
        type="checkbox"
        id={`order--${inputId}`}
        value={title}
        onChange={handelCheck}
      />
    </div>
  );
};

const OrderDetailsColumn = ({
  columnData: { row2 },
}: {
  columnData: OrderTableRowDataType['subRow'];
}) => {
  return (
    <div className="drop-down__content--card">
      <TextRowItem title="orderId" text={row2.orderId} />
      {row2.addOns?.length === 0 ? (
        <>
          <TextRowItem title="addons" text="no addons" />
        </>
      ) : (
        <>
          {row2.addOns?.map((rowText, key) => {
            return key === 0 ? (
              <TextRowItem title="addons" text={rowText} />
            ) : (
              <>
                <TextRowItem title=" " text={rowText} />
              </>
            );
          })}
        </>
      )}
    </div>
  );
};

const DropDownRowContent = ({ rowDatas }: DropDownRowContentProps) => {
  return (
    <>
      <ClientDetailColumn columnData={rowDatas.subRow} />
      <hr />
      <OrderDetailsColumn columnData={rowDatas.subRow} />
      <hr />
    </>
  );
};

// eslint-disable-next-line import/prefer-default-export
export const DropDownRow = ({
  activeState,
  DropDownRowDatas,
}: DropDownRowProps) => {
  const [isAnyCheckChecked, setIsAnyCheckChecked] = useState(true);
  const [checkState, setCheckState] = useState({
    state: false,
    payment: false,
  });
  const handelStateCheck = (e: ChangeEvent<HTMLInputElement>) => {
    setCheckState((pre) => {
      return { ...pre, [e.target.value]: e.target.checked };
    });
  };
  useEffect(() => {
    const handleSaveButtonBehaver = () => {
      if (isAny(checkState, true)) {
        setIsAnyCheckChecked(false);
      } else {
        setIsAnyCheckChecked(true);
      }
    };

    handleSaveButtonBehaver();
  }, [checkState]);
  return (
    <tr role="row" className="drop-down">
      <td
        id="drop-down__row"
        className={(activeState && 'drop-down__row--shown') || ''}
        colSpan={7}
        role="cell"
      >
        <div className="drop-down__content">
          <DropDownRowContent rowDatas={DropDownRowDatas} />
          <div className="drop-down__content--card">
            <TextRowItem
              title="discount"
              text={numberToCurrency(DropDownRowDatas.discount)}
            />
            <TextRowItem
              title="pack price"
              text={numberToCurrency(DropDownRowDatas.price)}
            />
            <CheckInputRowItem
              {...{
                title: `states`,
                handelCheck: handelStateCheck,
                inputId: `states-${DropDownRowDatas.id}`,
              }}
            />
            <CheckInputRowItem
              {...{
                title: `payment`,
                handelCheck: handelStateCheck,
                inputId: `payment-${DropDownRowDatas.id}`,
              }}
            />
          </div>
        </div>
        <div className="conformation--section">
          <button
            type="button"
            disabled={isAnyCheckChecked}
            id="order__btn--save"
          >
            <DataSaverOnIcon />
            save
          </button>
          <button type="button" id="order__btn--cancel">
            <HighlightOffIcon />
            cancel
          </button>
        </div>
      </td>
    </tr>
  );
};
