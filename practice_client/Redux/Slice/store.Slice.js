import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import AxiosInstance from "../../helpers/axios";

const initialState={
    data: localStorage.getItem('data') != undefined ? JSON.parse(localStorage.getItem('data')): {'signature': 'adarsh'},
}
export const getstoreCard= createAsyncThunk('/store/getstore', async()=>{
    try {
        const res = AxiosInstance.get('store/get')
        // toast.promise(res, {
        //     loading: 'Wait ! Logging in store',
        //     success: (data)=>{
        //         return data?.data?.message;
        //     },
        //     error: 'failed to give stores'
        // })
        return (await res).data;
    } catch (e) {
        toast.e(e?.response?.data?.message);
    }
});
const storeSlice= createSlice({
    name: 'stores',
    initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
            .addCase(getstoreCard.fulfilled, (state, action)=>{
                localStorage.setItem('data', JSON.stringify(action?.payload?.store))
                state.data= action?.payload?.store;
            })
    }
})

export default storeSlice.reducer;