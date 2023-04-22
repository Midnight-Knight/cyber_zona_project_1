import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Style from "./AchievementsSlider.module.css";
import Image from "./../../../image/Plug.png"
import {AchievementsBlock} from "../AchievementsBlock/AchievementsBlock";
import axios from "axios";

export const AchievementsSlider = () => {
    let arr = [];
    for (let i = 0; i < 4; ++i) {
        arr.push(<AchievementsBlock
            key="0"
            achievement={"Загрузка..."}
            image={Image}/>
        );
    }
    const [SliderElements, SetSliderElements] = useState(arr);
    const [Achievements, SetAchievements] = useState("Загрузка...");

    useEffect(() => {
        async function LoadBookingBlock()
        {
            try {
                let ArrLoading = [];
                const response = await axios.get('http://localhost:2999/api/get/achievements');
                const jsonData = await response.data;
                switch (jsonData.array.length) {
                    case 0:
                        SetAchievements(0);
                        break;
                    case 1:
                        for (let i = 0; i < 4; ++i) {
                            const imgUrl = await axios.get(jsonData.array[0].image, { responseType: 'blob' });
                            ArrLoading.push(<AchievementsBlock
                                key="0"
                                achievement={jsonData.array[0].achievement}
                                image={await window.URL.createObjectURL(new Blob([imgUrl.data]))}/>
                            );
                        }
                        SetAchievements(1);
                        break;
                    case 2: case 3:
                        for (let j = 0; j < 2; ++j) {
                            for (let i = 0; i < 3; ++i)
                            {
                                const imgUrl = await axios.get(jsonData.array[i].image, { responseType: 'blob' });
                                ArrLoading.push(<AchievementsBlock
                                    key={i}
                                    achievement={jsonData.array[i].achievement}
                                    image={await window.URL.createObjectURL(new Blob([imgUrl.data]))}/>
                                );
                            }
                        }
                        SetAchievements(jsonData.array.length);
                        break;
                    default:
                        for (let i = 0; i < jsonData.array.length; ++i)
                        {
                            const imgUrl = await axios.get(jsonData.array[i].image, { responseType: 'blob' });
                            ArrLoading.push(<AchievementsBlock
                                key={i}
                                achievement={jsonData.array[i].achievement}
                                image={await window.URL.createObjectURL(new Blob([imgUrl.data]))}/>
                            );
                        }
                        SetAchievements(jsonData.array.length);
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
        <div className={Style.AchievementsSlider}>
            <div>
                <p>Достижения:</p>
                <p>{Achievements}</p>
            </div>
            <Slider {...settings} className={Style.Slider486}>
                {SliderElements.map(elem => {return elem})}
            </Slider>
        </div>
    )
}