import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './authSlice';

const store = configureStore({
    reducer: {
        auth: authSliceReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: ['auth/login'], 
                ignoredPaths: ['auth.userData'], 
            },
        }),
});

export default store;