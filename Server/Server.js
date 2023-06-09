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

app.get('/api/get/teams', (req, res) => {
    const data = {
        array: [
            {image:`http://localhost:${PORT}/minecraft.jpg`,name:"barbaRiki team 1",number:1},
            {image:`http://localhost:${PORT}/hogwarts.jpg`,name:"barbaRiki team 2",number:2},
            //{image:`http://localhost:${PORT}/minecraft.jpg`,name:"barbaRiki team 3",number:3},
            //{image:`http://localhost:${PORT}/hogwarts.jpg`,name:"barbaRiki team 4",number:4},
        ]
    };
    res.json(data);
})

app.get('/api/get/friends', (req, res) => {
    const data = {
        array: [
            {image:`http://localhost:${PORT}/nadllin.jpg`,nickname:"nadllin 1",name:"Надежда Матвиенко 1"},
            {image:`http://localhost:${PORT}/nadllin.jpg`,nickname:"nadllin 2",name:"Надежда Матвиенко 2"},
            {image:`http://localhost:${PORT}/nadllin.jpg`,nickname:"nadllin 3",name:"Надежда Матвиенко 3"},
            {image:`http://localhost:${PORT}/nadllin.jpg`,nickname:"nadllin 4",name:"Надежда Матвиенко 4"},
            {image:`http://localhost:${PORT}/nadllin.jpg`,nickname:"nadllin 5",name:"Надежда Матвиенко 5"},
            {image:`http://localhost:${PORT}/nadllin.jpg`,nickname:"nadllin 6",name:"Надежда Матвиенко 6"},
            {image:`http://localhost:${PORT}/nadllin.jpg`,nickname:"nadllin 7",name:"Надежда Матвиенко 7"}
        ]
    };
    res.json(data);
})

app.get('/api/get/achievements', (req, res) => {
    const data = {
        array: [
            {image:`http://localhost:${PORT}/turtle.png`,achievement:"Черепашка"},
            {image:`http://localhost:${PORT}/amateur.png`,achievement:"Любитель"},
            {image:`http://localhost:${PORT}/dota_2_cup.png`,achievement:"Dota 2 CUP"},
            {image:`http://localhost:${PORT}/turtle.png`,achievement:"Черепашка 2"},
            {image:`http://localhost:${PORT}/amateur.png`,achievement:"Любитель 2"},
            {image:`http://localhost:${PORT}/dota_2_cup.png`,achievement:"Dota 2 CUP 2"}
        ]
    };
    res.json(data);
})

app.post('/api/registration', (req,res) => {
    res.status(200).json({})
})
