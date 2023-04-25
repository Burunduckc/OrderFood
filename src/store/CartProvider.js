//Hooks
import {useReducer} from "react";
//UI
 import {Cartcontext} from "./cart-context";
//Functions

const defCartState = {
    items: [],
    totalAmount: 0
}

 const cartReducer = (state, action) => {
    if (action.type === 'ADD_CART'){
    const updateitems = state.items.concat(action.item)
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount
        return {
        items: updateitems,
        totalAmount: updateTotalAmount}
    }
     return defCartState
 }
export const CartProvider = (prop) => {
    const [cartState, dispatchCartState] = useReducer(cartReducer, defCartState)
    const add = (p) => {
    dispatchCartState({type: 'ADD_CART', item: p})
    }
    const remove=(p) => {
    dispatchCartState({type: 'REMOVE', id: p})
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: add,
        removeItem: remove
    }
    return <Cartcontext.Provider value={cartContext}>
        {prop.children}
    </Cartcontext.Provider>
}