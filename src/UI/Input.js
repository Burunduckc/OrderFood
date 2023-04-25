//Styles
import styles from './Input.module.css'
//Component

export const Input = (prop) => {
    return <div className={styles.input}>
        <label htmlFor={prop.input.value}>{prop.label}</label>
        <input {...prop.input}/>
    </div>
}
