import { configureStore } from '@reduxjs/toolkit'
import  authSlice  from './slices/Userslices'

export default configureStore({
  reducer: {
    authslice:authSlice
  },
})