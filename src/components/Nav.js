import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../icon.png';

const Nav = () => (
  <header className="header">
    <span className="head">
      <img className="img" src={Logo} alt="logo" />
      <h1>
        {'Space Travelers\'s Hub'}
      </h1>
    </span>
    <nav className="nav">
      <NavLink to="/" className="NavLink" activeClassName="is-active" exact>
        <span className="rockets">Rockets</span>
      </NavLink>
      <NavLink
        to="/missions"
        className="NavLink"
        activeClassName="is-active"
      >
        <span className="missions ">Missions</span>
      </NavLink>
      <NavLink to="/profile" className="NavLink" activeClassName="is-active">
        <span className="profile ">My profile</span>
      </NavLink>
    </nav>
  </header>
);

export default Nav;
