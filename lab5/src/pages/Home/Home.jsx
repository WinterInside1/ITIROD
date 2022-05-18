import React, { useContext } from 'react';
import calendarImage from '../../assets/images/calendar.png';
import './index.css';
import { Link } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-oauth';
import { NotificationManager } from 'react-notifications';
import { UserContext } from '../../contexts/userContext';

export const Home = () => {
  const { data, setData } = useContext(UserContext);
  console.log(data);

  return (
    <>
      <div className="d-flex justify-content-between middle-row">
        <div>
          <h1>ЗДЕСЬ</h1>
          <h2 className="mb-3">ТВОИ ЗНАНИЯ</h2>
          <Link to="/dashboard/home">
            <button className="button">ПОДОБРАТЬ СЕБЕ ПРЕПОДАВАТЕЛЯ</button>
          </Link>
        </div>
        <div className="calendar-image-wrapper">
          <img className="calendar-image" src={calendarImage} alt="calendar" />
          <Link to="/dashboard/calendar">
            <button className="button m-auto">ВОЙТИ В МОЙ КАЛЕНДАРЬ</button>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: 30, display: 'flex', justifyContent: 'center' }}>
        {!data.user ? (
          <GoogleLogin
            onLoginSuccess={(response) => {
              console.log(response);
              NotificationManager.success(
                `Добро пожаловать, ${response.Ru.Hv}`
              );
              setData({ ...data, user: response });
            }}
            onLoginFailure={(error) => console.log(error)}
          />
        ) : (
          <GoogleLogout
            onLogoutSuccess={() => {
              NotificationManager.info('Вы вышли из системы');
              setData({ ...data, user: null });
            }}
          />
        )}
      </div>
    </>
  );
};
