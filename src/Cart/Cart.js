//UI
import {Modal} from "../UI/Modal";
//Styles
import styles from './Cart.module.css'
export const Cart = (prop) => {
    const cartItems = <ul className={styles.cartItems}>{[
        {id: 'c1', name:'Sushi', amount: 2, price:12.99}].map(item => {return <li>{item.name}</li>
    })}</ul>

    return (
        <Modal>
        {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>35.62$</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']}>Close</button>
            <button className={styles.button}>Order</button>
        </div>
    </Modal>)
}