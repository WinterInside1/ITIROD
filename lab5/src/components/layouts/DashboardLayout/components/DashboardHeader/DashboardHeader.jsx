import React from 'react';
import searchIcon from '../../../../../assets/icons/search.svg';
import userImage from '../../../../../assets/images/user.png';

export const DashboardHeader = () => {
  return (
    <div className="dashboard-header">
      <div className="dashboard-header__block dashboard-header__search-wrapper">
        <img src={searchIcon} alt="search" className="dashboard-header__icon" />
        ПОИСК
      </div>
      <div className="dashboard-header__block">
        <div className="dashboard-header__block">
          <img
            src={userImage}
            alt="user"
            className="dashboard-header__avatar"
          />
          <div className="dashboard-header__profile-info-wrapper">
            <p className="dashboard-header__profile-name">АЛИНА</p>
            <p className="dashboard-header__profile-type">Ученик</p>
          </div>
        </div>
      </div>
    </div>
  );
};
