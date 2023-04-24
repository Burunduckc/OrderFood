//React
    import {Fragment} from "react";
//UI
import {Header} from "../UI/header";
//Images
import mealImg from '../assets/meals.jpg'
//Styles
import style from './Meals.module.css'
//Component
export const Meal = (prop) => {
    return <Fragment>
        <Header class={style.header}>
            <h1>Meals</h1>
            <button>Cart</button>
        </Header>
        <div className={style.mainImg}>
            <img src={mealImg} alt={prop.alt}/>
        </div>
    </Fragment>
}