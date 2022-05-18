import React, { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { UserContext } from '../../../contexts/userContext';
import { Sidebar, DashboardHeader } from './components';
import { Navigate } from 'react-router-dom';
import { NotificationManager } from 'react-notifications';

export const DashboardLayout = ({ children }) => {
  const { data } = useContext(UserContext);

  if (!data.user) {
    NotificationManager.error('ВОЙДИ В СИСТЕМУ');
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <main className="dashboard">
        <Sidebar />
        <DashboardHeader />
        {children}
        <Outlet />
      </main>
      <div className="dashboard__overflow" id="dashboard-overflow"></div>
    </>
  );
};
