import { configureStore } from "@reduxjs/toolkit";
import userSlice from '@/lib/slices/userSlice'

export const store = configureStore({
    reducer: {
        user: userSlice
    }
})