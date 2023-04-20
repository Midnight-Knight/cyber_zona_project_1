import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from "./TournamentsSlider.module.css";
import {TournamentsBlock} from "../TournamentsBlock/TournamentsBlock";

export const TournamentsSlider = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true
    };

    return(
        <div className={Style.TournamentsSlider}>
            <div>
                <p>Турниры</p>
                <button></button>
            </div>
            <Slider {...settings} className={Style.Slider486}>
                <TournamentsBlock title={"Загрузка..."} status={"Загрузка..."} date={"Загрузка..."}/>
                <TournamentsBlock title={"Загрузка..."} status={"Загрузка..."} date={"Загрузка..."}/>
                <TournamentsBlock title={"Загрузка..."} status={"Загрузка..."} date={"Загрузка..."}/>
                <TournamentsBlock title={"Загрузка..."} status={"Загрузка..."} date={"Загрузка..."}/>
            </Slider>
        </div>
    )
}