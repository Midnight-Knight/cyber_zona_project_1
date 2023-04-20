import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from "./TournamentsSlider.module.css";
import Image from "./../../../image/Plug.png"
import {TournamentsBlock} from "../TournamentsBlock/TournamentsBlock";
import axios from "axios";

export const TournamentsSlider = () => {
    let arr = [];
    for (let i = 0; i < 4; ++i) {
        arr.push(<TournamentsBlock
            key="0"
            title={"Загрузка..."}
            status={"Загрузка..."}
            date={"Загрузка..."}
            image={Image}/>
        );
    }
    const [SliderElements, SetSliderElements] = useState(arr);

    useEffect(() => {
        async function LoadBookingBlock()
        {
            try {
                let ArrLoading = [];
                const response = await axios.get('http://localhost:2999/api/get/tournaments');
                const jsonData = await response.data;
                switch (jsonData.array.length) {
                    case 0:
                        for (let i = 0; i < 4; ++i) {
                            ArrLoading.push(<TournamentsBlock
                                key="0"
                                title={"Турниров нету"}
                                status={""}
                                date={""}
                                image={Image}/>
                            );
                        }
                        break;
                    case 1:
                        for (let i = 0; i < 4; ++i) {
                            const imgUrl = await axios.get(jsonData.array[0].image, { responseType: 'blob' });
                            ArrLoading.push(<TournamentsBlock
                                key="0"
                                title={jsonData.array[0].title}
                                status={jsonData.array[0].status}
                                date={jsonData.array[0].date}
                                image={await window.URL.createObjectURL(new Blob([imgUrl.data]))}/>
                            );
                        }
                        break;
                    case 2: case 3:
                        for (let j = 0; j < 2; ++j) {
                            for (let i = 0; i < 3; ++i)
                            {
                                const imgUrl = await axios.get(jsonData.array[i].image, { responseType: 'blob' });
                                ArrLoading.push(<TournamentsBlock
                                    key={i}
                                    title={jsonData.array[i].title}
                                    status={jsonData.array[i].status}
                                    date={jsonData.array[i].date}
                                    image={await window.URL.createObjectURL(new Blob([imgUrl.data]))}/>
                                );
                            }
                        }
                        break;
                    default:
                        for (let i = 0; i < jsonData.array.length; ++i)
                        {
                            const imgUrl = await axios.get(jsonData.array[i].image, { responseType: 'blob' });
                            ArrLoading.push(<TournamentsBlock
                                key={i}
                                title={jsonData.array[i].title}
                                status={jsonData.array[i].status}
                                date={jsonData.array[i].date}
                                image={await window.URL.createObjectURL(new Blob([imgUrl.data]))}/>
                            );
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
        <div className={Style.TournamentsSlider}>
            <div>
                <p>Турниры</p>
                <button></button>
            </div>
            <Slider {...settings} className={Style.Slider486}>
                {SliderElements.map(elem => {return elem})}
            </Slider>
        </div>
    )
}