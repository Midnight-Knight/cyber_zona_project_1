import React from "react";
import Style from "./TeamsBlock.module.css";

export const TeamsBlock = (props) => {
    return (
        <div className={Style.TeamsBlock}>
            <img src={props.image}/>
            <div>
                <p>{props.name}</p>
                <p>{props.number + " игроков"}</p>
            </div>
        </div>
    )
}