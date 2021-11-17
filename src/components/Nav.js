import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../icon.png';

const Nav = () => (
  <header className="header">
    <span className="head">
      <img className="img navbar-brand" src={Logo} alt="logo" />
      <h1>
        {'Space Travelers\'s Hub'}
      </h1>
    </span>
    <nav className="nav justify-content-end">
      <NavLink to="/" className="nav-link" activeClassName="is-active" exact>
        <span className="rockets">Rockets</span>
      </NavLink>
      <NavLink
        to="/missions"
        className="nav-link"
        activeClassName="is-active"
      >
        <span className="missions ">Missions</span>
      </NavLink>
      <NavLink to="/profile" className="nav-link profile" activeClassName="is-active">
        <span>My profile</span>
      </NavLink>
    </nav>
  </header>
);

export default Nav;
