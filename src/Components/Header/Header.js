import * as React from 'react';
import './Header.css';
import logo from '../../Assets/foldscope.png';


const Header = () => (
  <header className="header">
    <img className="header-logo" src={logo} alt="foldscope"/>
  </header>
);

export default Header;
