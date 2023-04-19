import React, {useEffect, useState} from "react";
import "./InfoBlock.css";
import Plug from "./../../image/Plug.png";

export const InfoBlock = () => {
    const [Image, SetImage] = useState(Plug);
    const [Status, SetStatus] = useState("Loading...");
    const [Nickname, SetNickname] = useState()
    const [Tag, SetTag] = useState();
    const [FullName, SetFullName] = useState();
    const [Discord, SetDiscord] = useState(<></>);
    const [Steam, SetSteam] = useState(<></>);
    const [Vk, SetVk] = useState(<></>);
    const [StudyGroup, SetStudyGroup] = useState();
    const [StudentIdNumber, SetStudentIdNumber] = useState();
    const [PhoneNumber, SetPhoneNumber] = useState();

    useEffect(() => {

    }, [Status])


    return(
        <div id="InfoBlock">
            <div>
                <img src={Image} alt="Фото аккаунта"/>
                <div>
                    <div id="Ellipse" className={(Status === "Loading...") ? "Loading" : Status}></div>
                    <p>{Status}</p>
                </div>
            </div>
            <div>
                <div>
                    <div id="RowNicknameAndTag">
                        <p id="Nickname">{(Status === "Loading...") ? Status : Nickname}</p>
                        <p id="Tag">{(Status === "Loading...") ? "loading..." : Tag}</p>
                    </div>
                    <p id="FullName">{(Status === "Loading...") ? Status : FullName}</p>
                    <div id="ColumnSocialNetworks">
                        {Discord}
                        {Steam}
                        {Vk}
                    </div>
                </div>
                <div id="ButtonInfoBlock">
                    <button>Настройки</button>
                    <button>Админ</button>
                </div>
            </div>
            <div>
                <p>Информация о пользователе:</p>
                <div id="StudyGroup">
                    <p>Учебная группа: <span>{(Status === "Loading...") ? Status : StudyGroup}</span></p>
                </div>
                <div id="StudentIdNumber">
                    <p>Номер студенческого: <span>{(Status === "Loading...") ? Status : StudentIdNumber}</span></p>
                </div>
                <div id="PhoneNumber">
                    <p>Номер телефона: <span>{(Status === "Loading...") ? Status : PhoneNumber}</span></p>
                </div>
            </div>
        </div>
    )
}