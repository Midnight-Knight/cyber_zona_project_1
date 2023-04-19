const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 2999;

const app = express();

app.use(cors());

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу: http://localhost:${PORT}/, Клиентская часть ещё не запущена, для её запуска создайте новую консоль(старую не закрывать), перейдите в Client и пропишите npm start`);
})

app.get('/api/get', (req, res) => {
    res.status(200).json({})
})

app.post('/api/registration', (req,res) => {
    res.status(200).json({})
})
