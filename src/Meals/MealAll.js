//React
    import {Fragment} from "react";
//UI
import {AvabMeals} from "./AvabMeals";
import {MealsSum} from "./MealsSum";
//Styles
import classes from './MealsSum.module.css'
import styles from './AvabMeals.module.css'

export const MealAll = () => {
    return (
        <Fragment>
            <MealsSum  style = {classes.summary}/>
            <AvabMeals style = {styles.meals}/>
        </Fragment>
    )
}