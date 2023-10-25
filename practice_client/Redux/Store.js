import {configureStore} from '@reduxjs/toolkit';
import storeSliceReducer from './Slice/store.Slice';

const store = configureStore({
    reducer: {
        stores: storeSliceReducer,
    },
    devTools: true,
})

export default  store;