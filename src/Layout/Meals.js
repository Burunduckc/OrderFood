//React
    import {Fragment} from "react";
//UI
import {Header} from "../UI/header";
import {ButtonMeal} from "../UI/btn";
//Images
import {CartIcon as Icon} from "../assets/iconcart";
import mealImg from '../assets/meals.jpg'
//Styles
import style from './Meals.module.css'
import classes from '../UI/btn.module.css'
//Component
export const Meal = (prop) => {
    return (
        <Fragment>
        <Header>
            <h1>Meals</h1>
            <ButtonMeal btn={classes.button}>
                <span className={classes.icon}><Icon/></span>
                <span>Your Cart</span>
                <span className={classes.badge}>3</span>
            </ButtonMeal>
        </Header>
        <div className={style.mainImg}>
            <img src={mealImg} alt={prop.alt}/>
        </div>
    </Fragment>
    )
}