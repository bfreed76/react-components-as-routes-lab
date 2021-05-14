import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact activeStyle={{background:'blue'}}>Home</NavLink>
      <NavLink to="/movies" exact activeStyle={{background: 'blue'}}>Movies</NavLink>
      <NavLink to="/directors" exact activeStyle={{background: 'blue'}}>Directors</NavLink>
      <NavLink to="/actors" exact activeStyle={{background: 'blue'}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
