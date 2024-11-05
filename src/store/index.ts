import dataSlice from '@/reducers/dataSlice'
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reducer: {
        data: dataSlice
    }
})