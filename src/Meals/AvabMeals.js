//Data
import {DUMMY_MEALS as dummyMeal} from "../DataMeals/dummyMeals";
//UI
import {Background} from "../UI/Background";
import {MealItem} from "./MealItem/MealItem";
//Component
export const AvabMeals = (prop) => {

    const dummyMealList = dummyMeal.map(i =>
        <MealItem key={i.id}
                  title={i.name}
                  description={i.description}
                  price={i.price}/> )
    return <section className={prop.style}>
        <Background>
            <ul>{dummyMealList}</ul>
        </Background>
        </section>
}