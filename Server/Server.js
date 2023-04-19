const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 2999;

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static("image"));

app.listen(PORT, () => {
    console.log(`Сервер запущен по адресу: http://localhost:${PORT}/, Клиентская часть ещё не запущена, для её запуска создайте новую консоль(старую не закрывать), перейдите в Client и пропишите npm start`);
})

app.get('/api/get/profile', (req, res) => {
    const data = {
        Image: `http://localhost:${PORT}/Ellipse 188.png`,
        Status: 'Online',
        Nickname: "nadllin",
        TagProfile: "@nadllin",
        FullName: "Матвиенко Надежда Владимировна",
        Discord: "nadllin#8537",
        Steam: "nadllin",
        Vk: "nadin_matvienko",
        StudyGroup: "ТКБО-02-21",
        StudentIdNumber: "21T0345",
        PhoneNumber: "8-963-683-01-20"
    };
    res.json(data);
})

app.post('/api/registration', (req,res) => {
    res.status(200).json({})
})
