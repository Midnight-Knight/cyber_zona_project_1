import React, {useState} from "react";
import Style from "./TeamsSlider.module.css";
import {TeamsBlock} from "../TeamsBlock/TeamsBlock";
import Image from "./../../../../image/NoPhoto.svg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const TeamsSlider = () => {
    const start = (<TeamsBlock name={"Загрузка..."} number={"Загрузка игроков"} image={Image}/>);
    const [SliderElements, SetSliderElements] = useState([start]);

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        rows: 2,
        slidesToScroll: 1,
        swipeToSlide: true
    };

    return(
        <>
            <div className={Style.TeamsSliderInfo}>
                <div>
                    <p>Мои команды</p>
                    <button></button>
                    <button></button>
                </div>
                <p>Здесь будет написан список твоих команд</p>
            </div>
            <Slider {...settings} className={Style.TeamsSlider}>
                {SliderElements.map(elem => {return elem})}
            </Slider>
        </>
    )
}