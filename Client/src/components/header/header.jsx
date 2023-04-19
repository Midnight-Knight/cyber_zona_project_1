import React from "react";
import "./header.css";
import Logo from "./../../image/Group 685.svg";

export const Header = () => {
    return(
        <header>
            <div>
                <div id="MainHeader">
                    <img src={Logo} alt="Логотип"/>
                    <nav>
                        <button>БРОНИРОВАНИЕ</button>
                        <button>ТУРНИРЫ</button>
                        <button>СБОРНЫЕ</button>
                        <button>МАГАЗИН</button>
                        <button>УСЛУГИ</button>
                        <button>О НАС</button>
                    </nav>
                </div>
                <div id="LoginDiv">
                    <button id="Login">
                        ВХОД
                    </button>
                    <button id="LoginGradient">
                        ВХОД
                    </button>
                </div>
            </div>
        </header>
    )
}