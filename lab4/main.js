const express = require('express');
const app = express();
const port = 3000;

const path = require('path');

app.use(express.static(path.join(__dirname, 'src')));

const dashboard = express.Router();

dashboard.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/pages/dashboard/home/index.html'));
});

dashboard.get('/calendar', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/pages/dashboard/calendar/index.html'));
});
dashboard.get('/payment', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/pages/dashboard/payment/index.html'));
});

app.use('/dashboard', dashboard);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/src/pages/home/index.html'))
);
app.get('/sign-up', (req, res) =>
  res.sendFile(path.join(__dirname, '/src/pages/sign-up/index.html'))
);
app.get('/sign-in', (req, res) =>
  res.sendFile(path.join(__dirname, '/src/pages/sign-in/index.html'))
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
