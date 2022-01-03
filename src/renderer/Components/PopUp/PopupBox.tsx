import React from 'react';
import { useHistory } from 'react-router-dom';
// import { ReactComponent as CheckCircle } from '../../Asset/svg/check-circle.svg';

import './PopupBox.scss';

interface Props {
  popupState: boolean;
  setPopupState: React.Dispatch<React.SetStateAction<boolean>>;
  buttonText: string;
  children?: React.ReactNode;
  pushToHome?: boolean;
  pushToLocation?: string;
  goBack?: boolean;
}

const PopupBox = ({
  setPopupState,
  popupState,
  children,
  buttonText,
  pushToHome,
  pushToLocation,
  goBack,
}: Props) => {
  const history = useHistory();
  const scrollLock = () => {
    if (popupState) {
      window.document.body.style.overflowY = 'hidden';
    } else {
      window.document.body.style.overflowY = 'auto';
    }
  };
  scrollLock();
  return (
    <div className={`popupBox ${popupState && 'popupBoxNoteActive'}`}>
      <div className="popupBoxNote">
        {/* <CheckCircle /> */}
        {children}
        <button
          type="button"
          onClick={() => {
            setPopupState((pre) => !pre);
            if (pushToHome) {
              setTimeout(() => {
                history.push('/');
              }, 200);
            }
            if (pushToLocation) {
              setTimeout(() => {
                history.push(pushToLocation);
              }, 200);
            }
            if (goBack) {
              setTimeout(() => {
                history.goBack();
              }, 200);
            }
          }}
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

PopupBox.defaultProps = {
  pushToHome: false,
  children: <></>,
  pushToLocation: undefined,
  goBack: undefined,
};

export default PopupBox;
