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
    const updateTotalAmount = state.totalAmount + action.item.price * action.item.amount

    const existingCartIndex = state.items.findIndex(
        item => item.id === action.item.id
    )

        const existingCartItem = state.items[existingCartIndex]
         let updateItems;
    if (existingCartItem){
        const updateItem = {
            ...existingCartItem,
            amount: existingCartItem.amount + action.item.amount
        };

        updateItems = [...state.items];
        updateItems[existingCartIndex]= updateItem
    } else {
        updateItems = state.items.concat(action.item)
    }


        return {
        items: updateItems,
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