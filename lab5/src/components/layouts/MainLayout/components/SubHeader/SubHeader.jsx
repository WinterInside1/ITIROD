import React from 'react';

export const SubHeader = () => {
  return (
    <div className="subheader">
      <nav className="navigation navigation--subheader">
        <a className="nav-link nav-link--selected" href="#instagram">
          ГЛАВНАЯ
        </a>
        <a className="nav-link" href="#telegram">
          ПРЕПОДВАВАТЕЛИ
        </a>
        <a className="nav-link" href="#facebook">
          ПРЕДМЕТЫ
        </a>
        <a className="nav-link" href="#facebook">
          ОТЗЫВЫ
        </a>
      </nav>
    </div>
  );
};
