import React, {useEffect, useState} from "react";
import "./BookingSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BookingBlock} from "../BookingBlock/BookingBlock";


export const BookingSlider = () => {

    let arr = [];
    for (let i = 0; i < 4; ++i) {
        arr.push(<BookingBlock div={{date: "Loading...", unit: "Loading...", number: "Loading...", time: "Loading..."}}
                               button={{text: "Loading..."}}/>);
    }

    useEffect(() => {
        async function LoadBookingBlock()
        {
            try {

            }
            catch (error)
            {
                LoadBookingBlock();
            }
        }

        LoadBookingBlock();
    }, [])

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        swipeToSlide: true
    };

    return(
        <div id="BookingSlider">
            <p>БРОНИРОВАНИЕ</p>
            <Slider {...settings} className="Slider540">
                {arr.map(elem => {return elem})}
            </Slider>
        </div>
    )
}