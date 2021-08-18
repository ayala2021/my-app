import React from "react";
import {NavLink} from 'react-router-dom';
import './HomePage.css'
const HomePage = () => {
    return (<div>
    <NavLink to="/todos">Todos</NavLink>
    <img src="/td.jpg'" alt=""/>
            <div> welcome to todo app </div>
    </div>)
}
export default HomePage;