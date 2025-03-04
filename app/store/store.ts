import { configureStore } from '@reduxjs/toolkit'
import auth from './slice/authSlice'
import supplier from './slice/supplierSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
      auth,
      supplier
    },
  })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']