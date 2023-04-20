import React from "react";
import Style from "./TournamentsBlock.module.css";
import Image from "./../../../image/блок.png"

export const TournamentsBlock = (props) => {
    return (
        <div className={Style.TournamentsBlock}>
            <div>
                <p>{props.title}</p>
                <p>{props.status}</p>
                <p>{props.date}</p>
                <img src={Image}/>
            </div>
        </div>
    )
}