import React, { useState, useEffect } from 'react';
import logoImage from '../../../../../assets/images/logo.png';
import sidebarOpenIcon from '../../../../../assets/icons/sidebar/open.svg';
import sidebarHomeIcon from '../../../../../assets/icons/sidebar/home.svg';
import sidebarStatIcon from '../../../../../assets/icons/sidebar/stat.svg';
import sidebarCalendarIcon from '../../../../../assets/icons/sidebar/calendar.svg';
import sidebarMessageIcon from '../../../../../assets/icons/sidebar/message.svg';
import sidebarBookIcon from '../../../../../assets/icons/sidebar/book.svg';
import sidebarGearIcon from '../../../../../assets/icons/sidebar/gear.svg';
import sidebarQuestionIcon from '../../../../../assets/icons/sidebar/question.svg';
import sidebarExitIcon from '../../../../../assets/icons/sidebar/exit.svg';
import { NavLink } from 'react-router-dom';

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const overflow = document.getElementById('dashboard-overflow');
    if (open) {
      overflow.classList.add('dashboard__overflow--open');
    } else {
      overflow.classList.remove('dashboard__overflow--open');
    }
  }, [open]);

  return (
    <aside className={`sidebar ${open ? 'sidebar--open' : ''}`} id="sidebar">
      <NavLink to="/">
        <img src={logoImage} alt="logo" className="sidebar__logo" />
      </NavLink>

      <div className="sidebar-item my-4" id="sidebar-toggle">
        <div className="sidebar-item__text"></div>
        <img
          alt="open"
          src={sidebarOpenIcon}
          onClick={() => setOpen(!open)}
          className={`sidebar-item__icon ${
            open ? 'sidebar-item__icon--rotate' : ''
          }`}
        />
      </div>
      <NavLink
        to="/dashboard/home"
        className={(navData) =>
          `sidebar-item ${navData.isActive ? 'sidebar-item--selected' : ''}`
        }
        data-section="home"
      >
        <img alt="home" src={sidebarHomeIcon} className="sidebar-item__icon" />
        <div className="sidebar-item__text">ГЛАВНАЯ</div>
      </NavLink>
      <NavLink to="/" className="sidebar-item" data-section="classes">
        <img alt="stat" src={sidebarStatIcon} className="sidebar-item__icon" />
        <div className="sidebar-item__text">ПРЕДМЕТЫ</div>
      </NavLink>
      <NavLink
        className={(navData) =>
          `sidebar-item ${navData.isActive ? 'sidebar-item--selected' : ''}`
        }
        data-section="calendar"
        to="/dashboard/calendar"
      >
        <img
          src={sidebarCalendarIcon}
          alt="calendar"
          className="sidebar-item__icon"
        />
        <div className="sidebar-item__text">КАЛЕНДАРЬ</div>
      </NavLink>
      <NavLink
        to="/"
        className={(navData) =>
          `sidebar-item ${navData.isActive ? 'sidebar-item--selected' : ''}`
        }
        data-section="messages"
      >
        <img
          alt="message"
          src={sidebarMessageIcon}
          className="sidebar-item__icon"
        />
        <div className="sidebar-item__text">СООБЩЕНИЯ</div>
      </NavLink>
      <NavLink
        to="/"
        className={(navData) =>
          `sidebar-item ${navData.isActive ? 'sidebar-item--selected' : ''}`
        }
        data-section="homework"
      >
        <img src={sidebarBookIcon} alt="book" className="sidebar-item__icon" />
        <div className="sidebar-item__text">ДОМАШНЯЯ РАБОТА</div>
      </NavLink>
      <NavLink
        to="/"
        className={(navData) =>
          `sidebar-item ${navData.isActive ? 'sidebar-item--selected' : ''}`
        }
        data-section="settings"
      >
        <img src={sidebarGearIcon} alt="gear" className="sidebar-item__icon" />
        <div className="sidebar-item__text">НАСТРОЙКИ</div>
      </NavLink>
      <NavLink
        to="/"
        className={(navData) =>
          `sidebar-item ${navData.isActive ? 'sidebar-item--selected' : ''}`
        }
        data-section="help"
      >
        <img
          src={sidebarQuestionIcon}
          alt="question"
          className="sidebar-item__icon"
        />
        <div className="sidebar-item__text">ПОМОЩЬ</div>
      </NavLink>
      <div className="flex-grow"></div>
      <NavLink
        to="/"
        className={(navData) =>
          `sidebar-item ${navData.isActive ? 'sidebar-item--selected' : ''}`
        }
      >
        <img src={sidebarExitIcon} alt="exit" className="sidebar-item__icon" />
        <div className="sidebar-item__text"></div>
      </NavLink>
    </aside>
  );
};
