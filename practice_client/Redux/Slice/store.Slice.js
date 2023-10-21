import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../helpers/axios";
import toast from "react-hot-toast";

export const getstoreCard= createAsyncThunk('/store/getstore', async(data)=>{
    try {
        const res = axiosInstance.get('/store/get')
        toast.promise(res, {
            loading: 'Wait ! Logging in store',
            success: (data)=>{
                return data?.data?.message;
            },
            error: 'failed to give stores'
        })
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
            .addCase(getstoreCard.fulfilled, (state)=>{
                state.data={};
            })
    }
})

export default storeSlice.reducer;