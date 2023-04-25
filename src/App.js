//React
import {Fragment} from "react";
//Ui
import {Meal} from "./Layout/Meals";
import {MealAll} from "./Meals/MealAll";
import {Cart} from "./Cart/Cart";
//Component App
function App() {
  return (
    <Fragment>
        <Cart></Cart>
      <Meal alt = 'table with food'/>
        <main>
            <MealAll/>
        </main>
    </Fragment>
  );
}

export default App;
