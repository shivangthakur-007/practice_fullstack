import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from 'react-hot-toast'
import axiosInstance from "../../helper/axiosInstance";

const initialState= {
    data: localStorage.getItem('data') != undefined ? JSON.parse(localStorage.getItem('data')) : {'a':'b'},
}
export const getStore= createAsyncThunk('/store/data', async()=>{
    try {
        const res = axiosInstance.get("/store/get");
        // console.log(res);
        return (await res).data;
    } catch (error) {
        toast.error(error?.response?.data?.message);
    }
})

const storeSlice= createSlice({
    name: 'store',
    initialState,
    reducers: {},
    extraReducers: builders =>{
        builders
            .addCase(getStore.fulfilled, (state, action)=>{
                localStorage.setItem('data', JSON.stringify(action?.payload?.store))
                state.data= action?.payload?.store
            })
    }
})
export default storeSlice.reducer;