import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axios";
import toast from "react-hot-toast";

export const getstoreCard= createAsyncThunk('/store/getstore', async()=>{
    try {
        const res = axiosInstance.get('/store/get')
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
    name: 'store',
    initialState: [],
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