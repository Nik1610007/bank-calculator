const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/api/send-email', (req, res) => {
  console.log('Получены данные для отправки:', {
    email: req.body.email,
    payment: req.body.payment,
    date: new Date()
  });
  res.json({ status: 'success', message: 'Email отправлен (заглушка)' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});