import React from 'react';
import { NavLink as Link, useLocation } from 'react-router-dom';
import NavButton from './NavButton';

const Navlink = ({ to, name, onClick, ...rest }) => {
  const location = useLocation();

  const isActive = location.pathname === to;

  return (
    <Link to={to} onClick={onClick}>
      <NavButton isActive={isActive} {...rest}>
        {name}
      </NavButton>
    </Link>
  );
};

export default Navlink;
