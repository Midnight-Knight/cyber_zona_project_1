import React from "react";
import "./style/style.css";
import {Header} from "./components/header/header";
import {Personal_cabinet} from "./components/personal_cabinet/personal_cabinet";

function App() {
    return (
        <div className="App">
            <Header/>
            <Personal_cabinet/>
        </div>
    );
}

export default App;
