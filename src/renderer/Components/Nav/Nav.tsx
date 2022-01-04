/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { FC } from 'react';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PeopleIcon from '@mui/icons-material/People';
import { NavLink } from 'react-router-dom';

import heroIcon from '../../../../assets/resource/Heroicon.svg';
import { useAuth } from '../../Hooks';

const Nav: FC = () => {
  const { signOutUser } = useAuth();
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
          <NavLink activeClassName="active" to="/clients" title="Clients">
            <PeopleIcon />
          </NavLink>
          <NavLink activeClassName="active" to="/query" title="Query">
            <ImportContactsIcon />
          </NavLink>
          <NavLink activeClassName="active" to="/orders/order" title="Orders">
            <ShoppingBasketIcon />
          </NavLink>
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
