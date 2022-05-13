const timePicker = document.getElementById('timepicker');
const submitButton = document.getElementById('submit-button');
const alertMessage = document.getElementById('alert-message');
const ordersList = document.getElementById('orders-list');
const payedOrdersList = document.getElementById('payed-orders-list');
const clearOrdersButton = document.getElementById('clear-orders');
const payOrdersButton = document.getElementById('pay-orders');
const clearPayedOrdersButton = document.getElementById('clear-payed-orders');

let date = null;
let time = timePicker.value;

const calendar = new Calendar({
  selector: '#myCalendar',
  months: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  shortWeekday: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
  onSelect: (data, elem) => {
    const stringDate = new Date(data.date).toISOString().slice(0, 10);
    date = stringDate;
    console.log(date);
  },
});

timePicker.addEventListener('change', (e) => {
  time = e.target.value;
  console.log(time);
});

const updateOrders = () => {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const tbody = ordersList.querySelector('tbody');
  tbody.innerHTML = '';
  orders.forEach((order) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${order.date}</td><td>${order.time}</td>`;
    tbody.appendChild(tr);
  });
};

const updatePayedOrders = () => {
  const payedOrders = JSON.parse(localStorage.getItem('payedOrders')) || [];
  const tbody = payedOrdersList.querySelector('tbody');
  tbody.innerHTML = '';
  payedOrders.forEach((order) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${order.date}</td><td>${order.time}</td>`;
    tbody.appendChild(tr);
  });
};

submitButton.addEventListener('click', (e) => {
  if (!date) {
    return (alertMessage.innerHTML = 'Вы не выбрали дату');
  }

  alertMessage.innerHTML = `Забронированно на: ${date} в ${time}`;
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const payedOrders = JSON.parse(localStorage.getItem('payedOrders')) || [];

  const isAlreadyBooked = [...payedOrders, ...orders].some((order) => {
    return order.date === date && order.time === time;
  });

  if (isAlreadyBooked) {
    alertMessage.innerHTML = 'Дата уже занята';
    return;
  }
  orders.push({ date, time });
  localStorage.setItem('orders', JSON.stringify(orders));
  updateOrders();
  updatePayedOrders();
});

const payOrders = () => {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const payedOrders = JSON.parse(localStorage.getItem('payedOrders')) || [];
  localStorage.setItem(
    'payedOrders',
    JSON.stringify([...orders, ...payedOrders])
  );
  localStorage.removeItem('orders');

  updateOrders();
  updatePayedOrders();
};

clearOrdersButton.addEventListener('click', () => {
  localStorage.removeItem('orders');
  updateOrders();
});

clearPayedOrdersButton.addEventListener('click', () => {
  localStorage.removeItem('payedOrders');
  updatePayedOrders();
});

window.addEventListener('load', () => {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const paymentStatus = urlParams.get('paymentStatus');

  console.log(queryString, urlParams, paymentStatus);

  if (paymentStatus === 'success') {
    payOrders();
  }

  if (queryString.length > 0) {
    window.location.href = '/dashboard/calendar';
  }

  updateOrders();
  updatePayedOrders();
});
