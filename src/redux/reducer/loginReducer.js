import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {API_PATH} from "../type";
import axios from "axios";


const initialState = {
    login: {}
};

export const postLogin = createAsyncThunk(
    'postLogin',
    ({values, navigate}) => {
        console.log(values);
        navigate('/admin')
    }
);

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    extraReducers: {},
});

export default loginSlice.reducer