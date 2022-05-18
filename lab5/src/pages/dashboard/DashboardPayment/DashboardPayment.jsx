import React from 'react';
import './index.css';

export const DashboardPayment = () => {
  return (
    <form className="card__container" id="card-form">
      <div className="card">
        <div className="row credit">
          <div className="left">
            <p>Оплата картой</p>
          </div>
        </div>
        <div className="row cardholder">
          <div className="info">
            <label htmlFor="cardholdername">Имя</label>
            <input
              placeholder="e.g. Richard Bovell"
              id="cardholdername"
              required
              type="text"
              maxLength="25"
            />
          </div>
        </div>
        <div className="row number">
          <div className="info">
            <label htmlFor="cardnumber">Номер</label>
            <input
              required
              id="cardnumber"
              type="text"
              pattern="[0-9]{16,19}"
              maxLength="19"
              placeholder="8888-8888-8888-8888"
            />
          </div>
        </div>
        <div className="row details">
          <div className="left">
            <label htmlFor="expiry-date">Дата</label>
            <select id="expiry-date">
              <option>MM</option>
              <option value="1">01</option>
              <option value="2">02</option>
              <option value="3">03</option>
              <option value="4">04</option>
              <option value="5">05</option>
              <option value="6">06</option>
              <option value="7">07</option>
              <option value="8">08</option>
              <option value="9">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
            <span>/</span>
            <select id="expiry-date">
              <option>YYYY</option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
              <option value="2030">2030</option>
            </select>
          </div>
          <div className="right">
            <label htmlFor="cvv">CVC/CVV</label>
            <input type="text" maxLength="4" placeholder="123" required />
            <span
              data-balloon-length="medium"
              data-balloon="The 3 or 4-digit number on the back of your card."
              data-balloon-pos="up"
            >
              i
            </span>
          </div>
        </div>
      </div>
      <button
        onClick={(e) => {
          e.preventDefault();
          window.location.href = `/dashboard/calendar?paymentStatus=success`;
        }}
        type="submit"
        className="button button--purple mt-3 mb-4 mr-3"
      >
        Оплатить
      </button>
    </form>
  );
};
