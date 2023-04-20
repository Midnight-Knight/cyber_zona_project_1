import React, {useEffect, useState} from "react";
import "./BookingSlider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {BookingBlock} from "../BookingBlock/BookingBlock";
import axios from "axios";


export const BookingSlider = () => {

    let arr = [];
    for (let i = 0; i < 4; ++i) {
        arr.push(<BookingBlock key={"BookingBlock0"} div={{
            date: "Загрузка...",
            unit: "Загрузка...",
            number: "Загрузка...",
            time: "Загрузка..."
        }} button={{text: "Загрузка..."}}/>);
    }
    const [SliderElements, SetSliderElements] = useState(arr);

    useEffect(() => {
        async function LoadBookingBlock()
        {
            try {
                let ArrLoading = [];
                const response = await axios.get('http://localhost:2999/api/get/booking');
                const jsonData = await response.data;
                switch (jsonData.array.length) {
                    case 0:
                        for (let i = 0; i < 4; ++i) {
                            ArrLoading.push(<BookingBlock key={"BookingBlock0"} div={{
                                date: "20 апреля",
                                unit: "отсутствует",
                                number: "",
                                time: ""
                            }} button={{text: "Забронировать"}}/>);
                        }
                        break;
                    case 1:
                        for (let i = 0; i < 4; ++i) {
                            ArrLoading.push(
                                <BookingBlock key={"BookingBlock0"} div={{
                                    date: jsonData.array[0].date,
                                    unit: (jsonData.array[0].unit === "PC" ? "компьютера" : jsonData.array[0].unit),
                                    number: (jsonData.array[0].unit + "-" + jsonData.array[0].number),
                                    time: jsonData.array[0].time
                                }} button={{text: "Отменить"}}/>)
                    }
                        break;
                    case 2: case 3:
                        for (let j = 0; j < 2; ++j) {
                            for (let i = 0; i < jsonData.array.length; ++i) {
                                ArrLoading.push(
                                    <BookingBlock key={"BookingBlock"+i} div={{
                                    date: jsonData.array[i].date,
                                    unit: (jsonData.array[i].unit === "PC" ? "компьютера" : jsonData.array[i].unit),
                                    number: (jsonData.array[i].unit + "-" + jsonData.array[i].number),
                                    time: jsonData.array[i].time
                                }} button={{text: "Отменить"}}/>)
                            }
                        }
                        break;
                    default:
                        for (let i = 0; i < jsonData.array.length; ++i)
                        {
                            ArrLoading.push(
                                <BookingBlock key={"BookingBlock"+i} div={{
                                    date: jsonData.array[i].date,
                                    unit: (jsonData.array[i].unit === "PC" ? "компьютера" : jsonData.array[i].unit),
                                    number: (jsonData.array[i].unit+"-"+jsonData.array[i].number),
                                    time: jsonData.array[i].time
                                }} button={{text: "Отменить"}}/>)
                        }
                }
                SetSliderElements(ArrLoading);
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
                {SliderElements.map(elem => {return elem})}
            </Slider>
        </div>
    )
}