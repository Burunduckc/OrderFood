//UI
import {Input} from "../../UI/Input";
//Styles
import styles from './MealForm.module.css'

export const MealForm = (prop) => {
    return <form className={styles.form}>
        <Input label = 'Amount' input={{
        id:'Amount',
        type: 'number',
        min: '1',
        max: '5',
        defaultValue: '1'
        }
        }/>
        <button>+ Add</button>
    </form>
}