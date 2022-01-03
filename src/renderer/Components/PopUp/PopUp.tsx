import ErrorIcon from '@mui/icons-material/Error';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import './PopUp.scss';

interface Props {
  children: string;
}

export const ErrorPopUp = ({ children }: Props) => {
  return (
    <span id="error-popup">
      <ErrorIcon /> {children}
    </span>
  );
};

export const SuccessPopUp = ({ children }: Props) => {
  return (
    <span id="success-popup">
      <CheckCircleIcon /> {children}
    </span>
  );
};
