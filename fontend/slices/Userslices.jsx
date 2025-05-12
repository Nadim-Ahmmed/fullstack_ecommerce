import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: null,
  },
  reducers: {
    userloginInfo: (state ,action) => {
     
      state.value =action.payload;
    },
  
  },
})

export const { userloginInfo } = authSlice.actions

export default authSlice.reducer