import { configureStore } from '@reduxjs/toolkit'
import articlesReducer from "../features/articleSlice"
import cartSliceReducer from "../features/cartSlice"

const store = configureStore({
reducer: {
storearticles:articlesReducer,
storecart:cartSliceReducer
}
})
export default store;