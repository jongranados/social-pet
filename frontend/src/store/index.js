import { configureStore } from '@reduxjs/toolkit'; 
import logger from 'redux-logger'; 

const store = configureStore({ 
    reducer: {}, 
    middleware: (getDefaultMiddleware) => { 
        return process.env.NODE_ENV === 'production'
            ? getDefaultMiddleware()
            : getDefaultMiddleware().concat(logger); 
    }, 
});

export default store;
