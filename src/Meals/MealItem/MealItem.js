//Hooks
    import {useContext} from "react";
//UI
import {MealForm} from "./MealForm";
import {Cartcontext} from "../../store/cart-context";
//Styles
import classes from  './MealItem.module.css'
export const MealItem = (prop) => {
    const cartCtx = useContext(Cartcontext)
    const price = `₴${prop.price.toFixed(2)}`

    const addToCart = (amount) => {
        cartCtx.addItem({
            id: prop.id,
            name: prop.title,
            amount: amount,
            price: prop.price
        })
    }
    return <li className={classes.meal}>
        <div>
            <h3>{prop.title}</h3>
            <div className={classes.description}>{prop.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealForm onAddToCart={addToCart}/>
        </div>
    </li>
}