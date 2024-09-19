import { createSlice } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItems: []
    },
    reducers: {
      addItemToCart: (state, action) => {
        const timeId= new Date().getTime()
        state.cartItems.push({
            id: timeId,
            clothesId: action.payload.clothes.id,
            quantity: action.payload.quantity,
            totalPrice: action.payload.quantity * action.payload.clothes.price
        })
      },
      removeItemFromCart: (state, action) => {
        state.cartItems = state.cartItems.filter(
            cartItems => cartItems.id !== action.payload.cartItemId
        )
      }
    }
})

export const getTotalPrice = state => {
    return state.cart.cartItems.reduce((total, cartItems) => {
        return cartItems.totalPrice + total
    }, 0)
}

export const getCartItems  = state => state.cart.cartItems;
export const { addItemToCart, removeItemFromCart } = cartSlice.actions;
export default cartSlice.reducer;