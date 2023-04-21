import React, {useEffect, useState} from "react";
import Style from "./FriendsSlider.module.css";
import {FriendsBlock} from "../FriendsBlock/FriendsBlock";
import Image from "./../../../../image/Plug.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

export const FriendsSlider = () => {
    const [SliderElements, SetSliderElements] = useState([<FriendsBlock nickname={"No Friends"} name={"Загрузка..."} image={Image}/>]);
    const [Settings, SetSettings] = useState(
        {
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            rows: 3,
            slidesToScroll: 1,
            swipeToSlide: true
        }
    )

    useEffect(() => {
        async function LoadTeamsBlock()
        {
            try {
                let ArrLoading = [];
                const response = await axios.get('http://localhost:2999/api/get/friends');
                const jsonData = await response.data;

                switch (jsonData.array.length)
                {
                    case 0:
                        ArrLoading.push(<FriendsBlock
                            nickname={"No Friends"}
                            name={"У тебя нету друзей"}
                            image={Image}/>
                        );
                        SetSettings(
                            {
                                dots: false,
                                infinite: false,
                                speed: 500,
                                slidesToShow: 1,
                                rows: 3,
                                slidesToScroll: 1,
                                swipeToSlide: true
                            }
                        )
                        break;
                    case 1: case 2: case 3:
                    for (let i = 0; i < jsonData.array.length; ++i)
                    {
                        const imgUrl = await axios.get(jsonData.array[i].image, { responseType: 'blob' });
                        ArrLoading.push(<FriendsBlock
                            nickname={jsonData.array[i].nickname}
                            name={jsonData.array[i].name}
                            image={await window.URL.createObjectURL(new Blob([imgUrl.data]))}/>
                        );
                    }
                    SetSettings(
                        {
                            dots: false,
                            infinite: false,
                            speed: 500,
                            slidesToShow: 1,
                            rows: 3,
                            slidesToScroll: 1,
                            swipeToSlide: true
                        }
                    )
                        break;
                    default:
                        for (let i = 0; i < jsonData.array.length; ++i)
                        {
                            const imgUrl = await axios.get(jsonData.array[i].image, { responseType: 'blob' });
                            ArrLoading.push(<FriendsBlock
                                nickname={jsonData.array[i].nickname}
                                name={jsonData.array[i].name}
                                image={await window.URL.createObjectURL(new Blob([imgUrl.data]))}/>
                            );
                        }
                        SetSettings(
                            {
                                dots: false,
                                infinite: false,
                                speed: 500,
                                slidesToShow: 2,
                                rows: 3,
                                slidesToScroll: 1,
                                swipeToSlide: true
                            }
                        )
                }
                SetSliderElements(ArrLoading);
            }
            catch (error)
            {
                LoadTeamsBlock();
            }
        }

        LoadTeamsBlock();
    }, [])

    return(
        <>
            <div className={Style.FriendsSliderInfo}>
                <div>
                    <p>мои друзья</p>
                    <button></button>
                </div>
            </div>
            <Slider {...Settings} className={Style.FriendsSlider}>
                {SliderElements.map(elem => {return elem})}
            </Slider>
        </>
    )
}