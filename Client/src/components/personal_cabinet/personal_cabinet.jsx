import React from "react";
import "./personal_cabinet.css";
import DivImage from "./../../image/image_80_2-gigapixel-art-scale-4_00x.png";
import {InfoBlock} from "../InfoBlock/InfoBlock";
import {BookingSlider} from "../Booking/BookingSlider/BookingSlider";
import {TournamentsSlider} from "../Tournaments/TournamentsSlider/TournamentsSlider";
import {CommonBlock} from "../FriendsAndTeams/CommonBlock/CommonBlock";

export const Personal_cabinet = () => {
    return (
        <div id="Personal_cabinet" id="Personal_cabinet">
            <img src={DivImage} alt="Блок с картинкой"/>
            <div>
                <InfoBlock/>
                <div id="DivLine1">
                    <BookingSlider/>
                    <TournamentsSlider/>
                </div>
                <div id="DivLine2">
                    <CommonBlock/>
                </div>
            </div>
        </div>
    )
}