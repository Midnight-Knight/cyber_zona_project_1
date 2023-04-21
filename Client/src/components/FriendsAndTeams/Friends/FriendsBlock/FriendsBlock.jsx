import React from "react";
import Style from "./FriendsBlock.module.css";

export const FriendsBlock = (props) => {
    return (
        <div className={Style.FriendsBlock}>
            <img src={props.image}/>
            <div>
                <p>{props.nickname}</p>
                <p>{props.name}</p>
            </div>
        </div>
    )
}