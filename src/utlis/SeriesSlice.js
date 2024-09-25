import { createSlice } from "@reduxjs/toolkit";


const SeriesSlice = createSlice({
    name:"series",
    initialState:{
        popularseries:null
    },
    reducers:{
        addPopularSeries:(state,action)=>{
            state.popularseries = action.payload;
        }
    }
});


export const {addPopularSeries} = SeriesSlice.actions;

export default SeriesSlice.reducer;