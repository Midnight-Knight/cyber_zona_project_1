import React from "react";
import Style from "./AchievementsBlock.module.css";

export const AchievementsBlock = (props) => {
    return (
        <div className={Style.AchievementsBlock}>
            <div>
                <img src={props.image}/>
                <p>{props.achievement}</p>
            </div>
        </div>
    )
}