import { configureStore } from '@reduxjs/toolkit'
import numberReducer from './reducers/numberSlice'
import { useSelector, TypedUseSelectorHook } from 'react-redux'

const store = configureStore({
    reducer: {
        numberReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector 
export default store