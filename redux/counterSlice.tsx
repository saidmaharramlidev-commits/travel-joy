import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'


export interface CounterState {
    navbarStatus: boolean
}

const initialState: CounterState = {
    navbarStatus: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setNavbarStatus: (state) => {
            state.navbarStatus = !state.navbarStatus

        }

    },
})

export const { setNavbarStatus } = counterSlice.actions

export default counterSlice.reducer