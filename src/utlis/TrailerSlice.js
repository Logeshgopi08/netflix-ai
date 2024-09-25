import { createSlice } from "@reduxjs/toolkit";


const TrailerSlice = createSlice({
    name:"trailer",
    initialState:{
        trailerchange:true
    },
    reducers:{
        changeTrailer :(state,action)=>{
            state.trailerchange = !state.trailerchange;
        }
    }
});

 export const {changeTrailer} = TrailerSlice.actions;

export default TrailerSlice.reducer;