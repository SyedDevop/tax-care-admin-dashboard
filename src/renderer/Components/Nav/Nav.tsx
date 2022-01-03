/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PeopleIcon from '@mui/icons-material/People';
import { Link } from 'react-router-dom';

import heroIcon from '../../../../assets/resource/Heroicon.svg';
import { useAuth, useFirebaseFunction } from '../../Hooks';

const Nav: FC = () => {
  const { signOutUser, user } = useAuth();
  // const { isDiscount } = useFirebaseFunction();
  return (
    <nav id="nav">
      <img
        className="nav--dp"
        src={heroIcon}
        alt="profile icon"
        onClick={() => {
          signOutUser();
        }}
      />
      <div className="nav--link">
        <div className="nav--link-wrap">
          <Link to="/clients" title="Clients">
            <PeopleIcon />
          </Link>
          <Link to="/query" title="Query">
            <ImportContactsIcon />
          </Link>
          <Link to="/orders/order" title="Orders">
            <ShoppingBasketIcon />
          </Link>
        </div>
        {/* <button
          type="button"
          onClick={() => {
            isDiscount({ code: user?.uid });
          }}
        >
          add
        </button> */}
      </div>
    </nav>
  );
};

export default Nav;
