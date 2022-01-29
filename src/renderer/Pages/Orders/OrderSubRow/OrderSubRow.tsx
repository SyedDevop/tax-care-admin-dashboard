import { ChangeEvent, useEffect, useState } from 'react';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { isAny, numberToCurrency } from '../../../Utils';
import {
  TextRowItemProps,
  CheckInputRowItemProps,
  DropDownRowContentProps,
  DropDownRowProps,
} from '../../../Types';
import { OrderTableRowDataType } from '../Order';

const TextRowItem = ({ title, text }: TextRowItemProps) => {
  return (
    <div className="drop-down__content--card--line">
      <h3 className="key">{title}</h3>
      <h3 className="value">{text}</h3>
    </div>
  );
};

const ClientDetailColumn = ({
  columnData: { client, phone, email },
}: {
  columnData: OrderTableRowDataType['subRowData'];
}) => {
  return (
    <div className="drop-down__content--card">
      <TextRowItem title="client" text={client} />
      <TextRowItem title="phone no" text={phone} />
      <TextRowItem title="email" text={email} />
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
  columnData: { addOns, orderId },
}: {
  columnData: OrderTableRowDataType['subRowData'];
}) => {
  return (
    <div className="drop-down__content--card">
      <TextRowItem title="orderId" text={orderId} />
      {addOns?.length === 0 ? (
        <>
          <TextRowItem title="addons" text="no addons" />
        </>
      ) : (
        <>
          {addOns?.map((rowText, key) => {
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
      <ClientDetailColumn columnData={rowDatas.subRowData} />
      <hr />
      <OrderDetailsColumn columnData={rowDatas.subRowData} />
      <hr />
    </>
  );
};

// eslint-disable-next-line import/prefer-default-export
export const OrderSubRow = ({ DropDownRowDatas }: DropDownRowProps) => {
  // const [isAnyCheckChecked, setIsAnyCheckChecked] = useState(true);
  // const [checkState, setCheckState] = useState({
  //   state: false,
  //   payment: false,
  // });
  // const handelStateCheck = (e: ChangeEvent<HTMLInputElement>) => {
  //   setCheckState((pre) => {
  //     return { ...pre, [e.target.value]: e.target.checked };
  //   });
  // };
  // useEffect(() => {
  //   const handleSaveButtonBehaver = () => {
  //     if (isAny(checkState, true)) {
  //       setIsAnyCheckChecked(false);
  //     } else {
  //       setIsAnyCheckChecked(true);
  //     }
  //   };

  //   handleSaveButtonBehaver();
  // }, [checkState]);
  return (
    <>
      <div className="drop-down__content">
        <DropDownRowContent rowDatas={DropDownRowDatas} />
        <div className="drop-down__content--card">
          <TextRowItem
            title="discount"
            text={numberToCurrency(DropDownRowDatas.discount)}
          />
          <TextRowItem title="pack price" text={DropDownRowDatas.price} />
          {/* <CheckInputRowItem
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
          /> */}
        </div>
      </div>
      {/* <div className="conformation--section">
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
      </div> */}
    </>
  );
};
