import React, {useEffect, useState} from "react";
import "./InfoBlock.css";
import Plug from "./../../image/Plug.png";
import DiscordImage from "./../../image/Discord.svg";
import SteamImage from "./../../image/steam 1.svg";
import VkImage from "./../../image/VK.svg";
import axios from "axios";

export const InfoBlock = () => {
    const [Image, SetImage] = useState(Plug);
    const [Status, SetStatus] = useState("Загрузка...");
    const [Nickname, SetNickname] = useState()
    const [TagProfile, SetTagProfile] = useState();
    const [FullName, SetFullName] = useState();
    const [Discord, SetDiscord] = useState(<></>);
    const [Steam, SetSteam] = useState(<></>);
    const [Vk, SetVk] = useState(<></>);
    const [StudyGroup, SetStudyGroup] = useState();
    const [StudentIdNumber, SetStudentIdNumber] = useState();
    const [PhoneNumber, SetPhoneNumber] = useState();

    useEffect(() => {
        async function LoadingInfo()
        {
            try {
                const response = await axios.get('http://localhost:2999/api/get/profile');
                const imgUrl = await axios.get(response.data.Image, { responseType: 'blob' });
                SetImage(await window.URL.createObjectURL(new Blob([imgUrl.data])));

                const jsonData = await response.data;
                SetStatus(jsonData.Status);
                SetNickname(jsonData.Nickname);
                SetTagProfile(jsonData.TagProfile);
                SetFullName(jsonData.FullName);
                switch (jsonData.Discord)
                {
                    case "":
                        break;
                    default:
                        SetDiscord(
                            <div>
                                <img src={DiscordImage}/>
                                <p>{jsonData.Discord}</p>
                            </div>)
                }
                switch (jsonData.Steam)
                {
                    case "":
                        break;
                    default:
                        SetSteam(
                            <div>
                                <img src={SteamImage}/>
                                <p>{jsonData.Steam}</p>
                            </div>)
                }
                switch (jsonData.Vk)
                {
                    case "":
                        break;
                    default:
                        SetVk(
                            <div>
                                <img src={VkImage}/>
                                <p>{jsonData.Vk}</p>
                            </div>)
                }
                SetStudyGroup(jsonData.StudyGroup);
                SetStudentIdNumber(jsonData.StudentIdNumber);
                SetPhoneNumber(jsonData.PhoneNumber)
            } catch (error) {
                LoadingInfo();
            }
        }

        LoadingInfo();
    }, [])



    return(
        <div id="InfoBlock">
            <div>
                <img src={Image} alt="Фото аккаунта"/>
                <div>
                    <div id="Ellipse" className={(Status === "Загрузка...") ? "Loading" : Status}></div>
                    <p>{(Status === "Загрузка...") ? Status : ((Status === "Online") ? "в сети" : "не в сети")}</p>
                </div>
            </div>
            <div>
                <div>
                    <div id="RowNicknameAndTag">
                        <p id="Nickname">{(Status === "Загрузка...") ? Status : Nickname}</p>
                        <p id="Tag">{(Status === "Загрузка...") ? "загрузка..." : TagProfile}</p>
                    </div>
                    <p id="FullName">{(Status === "Загрузка...") ? Status : FullName}</p>
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
                    <p>Учебная группа: <span>{(Status === "Загрузка...") ? Status : StudyGroup}</span></p>
                </div>
                <div id="StudentIdNumber">
                    <p>Номер студенческого: <span>{(Status === "Загрузка...") ? Status : StudentIdNumber}</span></p>
                </div>
                <div id="PhoneNumber">
                    <p>Номер телефона: <span>{(Status === "Загрузка...") ? Status : PhoneNumber}</span></p>
                </div>
            </div>
        </div>
    )
}