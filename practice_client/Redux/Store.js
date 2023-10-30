import {configureStore} from '@reduxjs/toolkit';
import storeSliceReducer from './Slice/storeSlice';

const store= configureStore({
    reducer: storeSliceReducer,
    devtools: true,
})

export default store;