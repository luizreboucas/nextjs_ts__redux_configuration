import {createSlice, PayloadAction } from '@reduxjs/toolkit'

const initialState = 0

const numberSlice = createSlice({
    name: 'number',
    initialState,
    reducers:{
        initialize: () => {
            return initialState 
        },
        increase: (state,action: PayloadAction) => {
            return state + 1
        },
        decrease: (state, action: PayloadAction) => {
            return state - 1
        }

    }
})

export const {initialize, increase, decrease} = numberSlice.actions
export default numberSlice.reducer