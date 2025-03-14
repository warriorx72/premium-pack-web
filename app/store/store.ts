import { configureStore } from '@reduxjs/toolkit'
import auth from './slice/authSlice'
import supplier from './slice/supplierSlice'
import global from './slice/globalSlice'
import product from './slice/productSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth,
      supplier,
      global,
      product
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']