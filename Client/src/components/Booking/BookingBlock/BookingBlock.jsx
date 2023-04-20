import React from "react";
import Style from "./BookingBlock.module.css";

export const BookingBlock = (props) => {
    return (
        <div className={Style.BlockBooking}>
            <div>
                <p className={Style.date}>
                    {props.div.date}
                </p>
                <hr/>
                <p className={Style.unit}>
                    {"Бронирование " + props.div.unit}
                </p>
                <p className={Style.number}>
                    {props.div.number}
                </p>
                <p className={Style.time}>
                    {props.div.time}
                </p>
            </div>
            <button>
                {props.button.text}
            </button>
        </div>
    )
}