import React, {useEffect, useState} from "react";
import Style from "./TeamsSlider.module.css";
import {TeamsBlock} from "../TeamsBlock/TeamsBlock";
import Image from "./../../../../image/Plug.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import axios from "axios";

export const TeamsSlider = () => {
    const [SliderElements, SetSliderElements] = useState([<TeamsBlock name={"Загрузка..."} number={"Загрузка игроков"} image={Image}/>]);

    useEffect(() => {
        async function LoadTeamsBlock()
        {
            try {
                let ArrLoading = [];
                const response = await axios.get('http://localhost:2999/api/get/teams');
                const jsonData = await response.data;
                for (let i = 0; i < jsonData.array.length; ++i)
                {
                    const imgUrl = await axios.get(jsonData.array[i].image, { responseType: 'blob' });
                    ArrLoading.push(<TeamsBlock
                        name={jsonData.array[i].name}
                        number={jsonData.array[i].number}
                        image={await window.URL.createObjectURL(new Blob([imgUrl.data]))}/>
                    );}

                SetSliderElements(ArrLoading);
            }
            catch (error)
            {
                LoadTeamsBlock();
            }
        }

        LoadTeamsBlock();
    }, [])

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