import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
//configure store takes only object
export const store=configureStore({
    reducer:todoReducer
})
