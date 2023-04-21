import React, {useState} from "react";
import Style from "./CommonBlock.module.css";
import classNames from "classnames";
import {TeamsSlider} from "../Teams/TeamsSlider/TeamsSlider";
import {FriendsSlider} from "../Friends/FriendsSlider/FriendsSlider";

export const CommonBlock = () => {
    const [TeamsBlock, SetTeamsBlock] = useState(true);

    return (
        <div className={Style.CommonBlock}>
            <div>
                <button onClick={() => (TeamsBlock === false ? SetTeamsBlock(true) : null)} className={classNames(Style.ButtonTeams, TeamsBlock === true ? Style.ButtonActive : Style.ButtonOffline)}>
                    <p>Команда</p>
                    <hr/>
                </button>
                <button onClick={() => (TeamsBlock === true ? SetTeamsBlock(false) : null)} className={classNames(Style.ButtonFriends, TeamsBlock === true ? Style.ButtonOffline : Style.ButtonActive)}>
                    <p>Друзья</p>
                    <hr/>
                </button>
            </div>
            <div>
                {TeamsBlock === true ? <TeamsSlider/> : <FriendsSlider/>}
            </div>
        </div>
    )
}