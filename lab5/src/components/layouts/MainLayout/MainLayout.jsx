import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer, SubHeader } from './components';

export const MainLayout = ({ children }) => {
  return (
    <>
      <main className="background">
        <Header />
        <SubHeader />
        <div className="container">
          {children}
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
};
