import {configureStore} from '@reduxjs/toolkit';
import storeSliceReducers from './Slice/store.Slice';

const store = configureStore({
    reducer: {
        stores: storeSliceReducers,
    },
    devTools: true,
})

export default  store;