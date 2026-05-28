import { combineReducers } from "@reduxjs/toolkit";
import { baseApi } from "@/src/features/api/baseApi";
import authReducer from "@/src/features/slices/authSlice";

export const rootReducer = combineReducers({

[baseApi.reducerPath]: baseApi.reducer,
    auth: authReducer,

});