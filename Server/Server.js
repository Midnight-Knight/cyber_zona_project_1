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

app.get('/api/get/booking', (req, res) => {
    const data = {
        array: [
            {date:"21 апреля",unit:"PC",number:12,time:"9:00-10:30"},
            {date:"22 апреля",unit:"PC",number:12,time:"10:30-12:30"}
        ]
    };
    res.json(data);
})

app.get('/api/get/tournaments', (req, res) => {
    const data = {
        array: [
            {image:`http://localhost:${PORT}/block.png`,title:"DOTA 2",status:"Идёт регистрация",date:"17.10-20.11"},
            {image:`http://localhost:${PORT}/block.png`,title:"CS:GO",status:"Идёт регистрация",date:"22.10-14.11"},
            {image:`http://localhost:${PORT}/block.png`,title:"VALORANT",status:"Идёт регистрация",date:"08.10-02.11"}
        ]
    };
    res.json(data);
})

app.post('/api/registration', (req,res) => {
    res.status(200).json({})
})
