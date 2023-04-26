//Hooks
    import {useContext} from "react";
//UI
import {Modal} from "../UI/Modal";
import {Cartcontext} from "../store/cart-context";
import {CartItem} from "./CartItem";
//Styles
import styles from './Cart.module.css'
//Component
export const Cart = (prop) => {
    const cartCtx = useContext(Cartcontext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`
    const hasItems = cartCtx.items.length > 0;

    const removeItem = (id) => {
    cartCtx.removeItem(id)
    }

    const addItem = (item) => {
    cartCtx.addItem(item)
    }

    const cartItems = <ul className={styles.cartItems}>{cartCtx.items.map(item => {return <CartItem
        key={item.id}
        name={item.name}
        amount={item.amount}
        price={item.price}
        onRemove={removeItem.bind(null, item.id)}
        onAdd={addItem.bind(null, item)}/>
    })}</ul>

    return (
        <Modal onClose={prop.shotDown}>
        {cartItems}
        <div className={styles.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={prop.shotDown}>Close</button>
            {hasItems && <button className={styles.button}>Order</button>}
        </div>
    </Modal>)
}