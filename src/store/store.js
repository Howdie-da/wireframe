import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './authSlice';
import postSliceReducer from './postSlice'

const store = configureStore({
    reducer: {
        auth: authSliceReducer,
        posts: postSliceReducer
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