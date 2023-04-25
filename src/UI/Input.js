//React
    import React from "react";
//Styles
import styles from './Input.module.css'
//Component

export const Input = React.forwardRef((prop, ref) => {
    return <div className={styles.input}>
        <label htmlFor={prop.input.value}>{prop.label}</label>
        <input ref={ref} {...prop.input}/>
    </div>
});
