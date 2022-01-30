import { numberToCurrency } from '../../../Utils';
import {
  TextRowItemProps,
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
        </div>
      </div>
    </>
  );
};
