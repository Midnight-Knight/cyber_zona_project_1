import React from "react";
import "./personal_cabinet.css";
import DivImage from "./../../image/image_80_2-gigapixel-art-scale-4_00x.png";
import {InfoBlock} from "../InfoBlock/InfoBlock";

export const Personal_cabinet = () => {
    return (
        <div id="Personal_cabinet">
            <img src={DivImage} alt="Блок с картинкой"/>
            <div>
                <InfoBlock/>
            </div>
        </div>
    )
}