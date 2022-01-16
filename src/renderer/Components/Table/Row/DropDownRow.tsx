/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { ChangeEvent, useEffect, useState } from 'react';
import DataSaverOnIcon from '@mui/icons-material/DataSaverOn';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

import { isAny } from '../../../Utils';
import {
  TextRowItemProps,
  CheckInputRowItemProps,
  DropDownRowProps,
  DropDownRowData,
} from '../../../Types';

const TextRowItem = ({ title, text }: TextRowItemProps) => {
  return (
    <div className="drop-down__content--card--col">
      <h3 className="key">{title}</h3>
      <h3 className="value">{text}</h3>
    </div>
  );
};
const CheckInputRowItem = ({ title, handelCheck }: CheckInputRowItemProps) => {
  return (
    <div className="drop-down__content--card--col">
      <label htmlFor={`order--${title}`}>{title}</label>
      <input
        type="checkbox"
        id={`order--${title}`}
        value={title}
        onChange={handelCheck}
      />
    </div>
  );
};

const MapRowData = (data: DropDownRowData[]) => {
  return (
    <>
      {data.map(({ rowDatas }, key) => {
        return (
          <>
            <div className="drop-down__content--card" key={key}>
              {rowDatas.map((rowData, rowDataKey) => {
                return <TextRowItem {...rowData} key={rowDataKey} />;
              })}
            </div>
            <hr />
          </>
        );
      })}
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
          {MapRowData(DropDownRowDatas)}
          <div className="drop-down__content--card">
            <CheckInputRowItem
              {...{ title: 'states', handelCheck: handelStateCheck }}
            />
            <CheckInputRowItem
              {...{ title: 'payment', handelCheck: handelStateCheck }}
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
