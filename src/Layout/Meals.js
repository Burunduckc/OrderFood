//React
    import {Fragment, useContext, useEffect, useState} from "react";
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
    const [animatedBtn, setBtn] = useState(false)
    const {items} = cartCtx
    const btnClasses = `${classes.button} ${animatedBtn ? classes.bump : ''}`
    const time = () => {
    setBtn(false)
    }
    const set = () => {
        if (items.length === 0){
            return;
        }
        setBtn(true)
        const timer = setTimeout(time, 300);
        return () => {
            clearTimeout(timer);
        }
    }
    useEffect(set, [items])

    const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount
    }, 0);


    return (
        <Fragment>
        <Header>
            <h1>Харчування</h1>
            <ButtonMeal onClick={prop.onShow} btn={btnClasses}>
                <span className={classes.icon}><Icon/></span>
                <span>Твiй кошик</span>
                <span className={classes.badge}>{numberOfCartItems}</span>
            </ButtonMeal>
        </Header>
        <div className={style.mainImg}>
            <img src={mealImg} alt={prop.alt}/>
        </div>
    </Fragment>
    )
}