import React, { useEffect } from 'react';
import './index.css';
import '../index.css';
import { VerticalBarChart, StackedBarChart, LineChart } from './components';

export const DashboardHome = () => {
  useEffect(() => {}, []);

  return (
    <>
      <div className="dashboard-home__cards-wrapper">
        <div className="dashboard-home__card dashboard-home__card--1">
          <VerticalBarChart />
        </div>
        <div className="dashboard-home__card dashboard-home__card--2">
          <StackedBarChart />
        </div>
        <div className="dashboard-home__card dashboard-home__card--3">
          <LineChart />
        </div>
        <div className="dashboard-home__card dashboard-home__card--4">
          <StackedBarChart />
        </div>
        <div className="dashboard-home__card dashboard-home__card--5">
          <VerticalBarChart />
        </div>
      </div>
    </>
  );
};
