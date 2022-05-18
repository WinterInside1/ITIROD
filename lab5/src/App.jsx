import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { DashboardLayout, MainLayout } from './components/layouts';
import { Home } from './pages';
import { DashboardCalendar, DashboardHome, DashboardPayment } from './pages/dashboard';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import { UserContextProvider } from './contexts/userContext';

export const App = () => {
  const [data, setData] = useState({ user: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const globalData = JSON.parse(localStorage.getItem('globalData')) || {
      user: null,
    };
    setData(globalData);
    setLoading(false);
  }, []);

  if (loading) {
    return <></>;
  }

  return (
    <UserContextProvider
      value={{
        data,
        setData: (payload) => {
          localStorage.setItem('globalData', JSON.stringify(payload));
          setData(payload);
        },
      }}
    >
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="home" element={<DashboardHome />} />
          <Route path="calendar" element={<DashboardCalendar />} />
          <Route path="payment" element={<DashboardPayment />} />
        </Route>
      </Routes>
      <NotificationContainer />
    </UserContextProvider>
  );
};
