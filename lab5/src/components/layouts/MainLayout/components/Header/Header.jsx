import React from 'react';
import logoImage from '../../../../../assets/images/logo.png';
import searchIcon from '../../../../../assets/icons/search.svg';
import profileIcon from '../../../../../assets/icons/profile.svg';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className="header">
      <nav className="container navigation">
        <div className="navigation__block">
          <a className="nav-link" href="#instagram">
            INSTAGRAM
          </a>
          <a className="nav-link" href="#telegram">
            TELEGRAM
          </a>
          <a className="nav-link" href="#facebook">
            FACEBOOK
          </a>
        </div>
        <img src={logoImage} alt="logo" className="logo" />
        <div className="navigation__block">
          <div className="m-0 d-flex align-items-center">
            <span className="mr-2">ПОИСК</span>
            <img alt="search" width="12" height="12" src={searchIcon} />
          </div>
          <Link
            to="/dashboard/home"
          >
            <img src={profileIcon} alt="profile" />
          </Link>
        </div>
      </nav>
    </header>
  );
};
