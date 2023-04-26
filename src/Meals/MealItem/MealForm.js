//Hooks
    import {useRef, useState} from "react";
//UI
import {Input} from "../../UI/Input";
//Styles
import styles from './MealForm.module.css'

export const MealForm = (prop) => {
    const [amountValid, setAmount] = useState(true)
    const amountInputRef = useRef()
    const submit = (e) => {
        e.preventDefault()

        const entredAmount = amountInputRef.current.value;
        const entNumb = +entredAmount;

        if (entredAmount.trim().length === 0 || entredAmount < 1 || entNumb > 5){
            setAmount(false)
            return;
        }
        prop.onAddToCart(entNumb);
    }

    return <form className={styles.form} onSubmit={submit}>
        <Input
            label = 'Кількість'
            ref={amountInputRef}
            input={{
        id:'Amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1'
        }
        }/>
        <button>+ Додати</button>
        {!amountValid && <p>Будь ласка, введiть правильнi даннi(1-5)</p>}
    </form>
}