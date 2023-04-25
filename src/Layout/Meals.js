//React
    import {Fragment, useContext} from "react";
//UI
import {Header} from "../UI/header";
import {ButtonMeal} from "../UI/btn";
import {Cartcontext} from "../store/cart-context";
//Images
import {CartIcon as Icon} from "../assets/iconcart";
import mealImg from '../assets/meals.jpg'
//Styles
import style from './Meals.module.css'
import classes from '../UI/btn.module.css'
//Component
export const Meal = (prop) => {
    const cartCtx = useContext(Cartcontext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount
    }, 0);
    return (
        <Fragment>
        <Header>
            <h1>Meals</h1>
            <ButtonMeal onClick={prop.onShow} btn={classes.button}>
                <span className={classes.icon}><Icon/></span>
                <span>Your Cart</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </ButtonMeal>
        </Header>
        <div className={style.mainImg}>
            <img src={mealImg} alt={prop.alt}/>
        </div>
    </Fragment>
    )
}