//React
import {Fragment} from "react";
//Ui
import {Meal} from "./Layout/Meals";
import {MealAll} from "./Meals/MealAll";
function App() {
  return (
    <Fragment>
      <Meal/>
        <main>
            <MealAll/>
        </main>
    </Fragment>
  );
}

export default App;
