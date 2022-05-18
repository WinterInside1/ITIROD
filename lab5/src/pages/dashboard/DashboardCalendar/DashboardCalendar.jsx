import React, { useState, useMemo, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { NotificationManager } from 'react-notifications';
import { useLocation } from 'react-router-dom';

export const DashboardCalendar = () => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('00.00');
  const [data, setData] = useState({
    orders: [],
    payedOrders: [],
  });
  const { search } = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(search);

    if (query?.get('paymentStatus') === 'success') {
      const orders = JSON.parse(localStorage.getItem('orders')) || [];
      const payedOrders = JSON.parse(localStorage.getItem('payedOrders')) || [];

      setData({
        ...data,
        orders: [],
        payedOrders: [...payedOrders, ...orders],
      });
      localStorage.removeItem('orders');
      localStorage.setItem(
        'payedOrders',
        JSON.stringify([...payedOrders, ...orders])
      );

      NotificationManager.success('Заказ оплачен');
      window.location.href = '/dashboard/calendar';
    }
  }, [search, data]);

  useEffect(() => {
    setData({
      orders: JSON.parse(localStorage.getItem('orders')) || [],
      payedOrders: JSON.parse(localStorage.getItem('payedOrders')) || [],
    });
  }, []);

  const formattedPayload = useMemo(
    () => ({
      date: date?.toISOString()?.slice(0, 10) || null,
      time,
    }),
    [date, time]
  );

  console.log(formattedPayload);

  const addOrder = () => {
    const { date, time } = formattedPayload;

    if (!date || !time) {
      NotificationManager.error('Выберите дату и время');
      return;
    }

    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const payedOrders = JSON.parse(localStorage.getItem('payedOrders')) || [];
    const isAlreadyBooked = [...payedOrders, ...orders].some((order) => {
      return order.date === date && order.time === time;
    });

    if (isAlreadyBooked) {
      NotificationManager.error('Это время уже забронировано!');
      return;
    }

    orders.push({ date, time });
    localStorage.setItem('orders', JSON.stringify(orders));
    setData({ payedOrders, orders });
    NotificationManager.success('Забронировано!');
  };

  return (
    <>
      <h3 className="mb-3">Неоплаченные брони:</h3>
      <table className="styled-table w-100" id="orders-list">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data?.orders?.map((order) => (
            <tr key={`${order.date}${order.time}`}>
              <td>{order.date}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="d-flex">
        <a href="/dashboard/payment">
          <button
            id="pay-orders"
            className="button button--purple mt-3 mb-4 mr-3"
          >
            Оплатить
          </button>
        </a>
        <button onClick={() => {
            localStorage.removeItem('orders');
            setData({ orders: []});
        }} className="button button--danger mt-3 mb-4">
          Очистить
        </button>
      </div>
      <h3 className="mb-3">Oплаченные брони:</h3>
      <table className="styled-table w-100" id="payed-orders-list">
        <thead>
          <tr>
            <th>Date</th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody>
          {data?.payedOrders?.map((order) => (
            <tr key={`${order.date}${order.time}`}>
              <td>{order.date}</td>
              <td>{order.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="button button--danger mt-3 mb-4"
        onClick={() => {
            localStorage.removeItem('payedOrders');
            setData({ payedOrders: []});
        }}
      >
        Очистить
      </button>
      <h3 className="mb-3">Дата</h3>
      <Calendar onChange={setDate} value={date} />
      <h3 className="mb-3">Время</h3>
      <select
        className="select"
        name="timepicker"
        onChange={(e) => setTime(e.target.value)}
        id="timepicker"
      >
        <option value="00.00">00.00 AM</option>
        <option value="00.30">00.30 AM</option>
        <option value="01.00">01:00 AM</option>
        <option value="01.30">01:30 AM</option>
        <option value="02.00">02:00 AM</option>
        <option value="02.30">02:30 AM</option>
        <option value="03.00">03:00 AM</option>
        <option value="03.30">03:30 AM</option>
        <option value="04.00">04:00 AM</option>
        <option value="04.30">04:30 AM</option>
        <option value="05.00">05:00 AM</option>
        <option value="05.30">05:30 AM</option>
        <option value="06.00">06:00 AM</option>
        <option value="06.30">06:30 AM</option>
        <option value="07.00">07:00 AM</option>
        <option value="07.30">07:30 AM</option>
        <option value="08.00">08:00 AM</option>
        <option value="08.30">08:30 AM</option>
        <option value="09.00">09:00 AM</option>
        <option value="09.30">09:30 AM</option>
        <option value="10.00">10:00 AM</option>
        <option value="10.30">10:30 AM</option>
        <option value="11.00">11:00 AM</option>
        <option value="11.30">11:30 AM</option>
        <option value="12.00">12:00 PM</option>
        <option value="12.00">12:30 PM</option>
        <option value="13.30">13:30 PM</option>
        <option value="14.00">13:30 PM</option>
        <option value="14.30">14:30 PM</option>
        <option value="15.00">15:30 PM</option>
        <option value="15.30">15:30 PM</option>
        <option value="16.00">16:30 PM</option>
        <option value="16.30">16:30 PM</option>
        <option value="17.00">17:30 PM</option>
        <option value="17.30">17:30 PM</option>
        <option value="18.00">18:30 PM</option>
        <option value="18.30">18:30 PM</option>
        <option value="19.00">19:30 PM</option>
        <option value="19.30">19:30 PM</option>
        <option value="20.00">20:30 PM</option>
        <option value="20.30">20:30 PM</option>
        <option value="21.00">21:30 PM</option>
        <option value="21.30">21:30 PM</option>
        <option value="22.00">22:20 PM</option>
        <option value="22.30">22:30 PM</option>
        <option value="23.00">23:00 PM</option>
        <option value="23.30">23:30 PM</option>
      </select>
      <button onClick={addOrder} className="button button--purple mt-3">
        Зарезервировать
      </button>
      <p id="alert-message"></p>
    </>
  );
};
