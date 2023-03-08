import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  idofuser: [],
}

export const IdSlice = createSlice({
  name: 'userId',
  initialState,
  reducers: {
    userId : (state, action) => {
        state.idofuser = action.payload
    }
  },
})


export const { userId } = IdSlice.actions

export default IdSlice.reducer