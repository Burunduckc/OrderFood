//UI
import {MealForm} from "./MealForm";
//Styles
import classes from  './MealItem.module.css'
export const MealItem = (prop) => {
    const price = `$${prop.price.toFixed(2)}`
    return <li className={classes.meal}>
        <div>
            <h3>{prop.title}</h3>
            <div className={classes.description}>{prop.description}</div>
            <div className={classes.price}>{price}</div>
        </div>
        <div>
            <MealForm/>
        </div>
    </li>
}