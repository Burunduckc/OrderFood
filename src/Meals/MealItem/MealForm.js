//Hooks
    import {useRef, useState} from "react";
//UI
import {Input} from "../../UI/Input";
//Styles
import styles from './MealForm.module.css'

export const MealForm = (prop) => {
    const [amountValid, setAmount] = useState()
    const amounInputRef = useRef()
    const submit = (e) => {
        e.preventDefault()

        const entredAmount = amounInputRef.current.value;
        const entNumb = +entredAmount;

        if (entredAmount.trim().length === 0 || entredAmount < 1 || entNumb > 5){
            setAmount(false)
            return;
        }
        prop.onAddToCart(entredAmount);
    }

    return <form className={styles.form} onSubmit={submit}>
        <Input
            label = 'Amount'
            ref={amounInputRef}
            input={{
        id:'Amount',
        type: 'number',
        min: '1',
        max: '5',
        defaultValue: '1'
        }
        }/>
        <button>+ Add</button>
        {!amountValid && <p>Будь ласка, введiть правильнi даннi(1-5)</p>}
    </form>
}