const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const CHAT_ID = '-1002391201978';
const API_KEY = '7727226213:AAEuejpfvOf5BxPNLq0SXMyF98WlCcPbUyw';

app.use(bodyParser.json());

app.post('/webhook', (req, res) => {
    console.log('Полученные данные:', req.body);
    res.status(200).send('OK');
});

app.listen(3000, () => {
    console.log('Прокси-сервер запущен на порту 3000');
});