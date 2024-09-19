import { configureStore } from '@reduxjs/toolkit'
import clothes from './clothesSlice'
import cart from './cartSlice'


export const store = configureStore({
  reducer: {
    clothes: clothes,
    cart
  },
})