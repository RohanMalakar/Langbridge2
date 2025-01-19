import { createSlice } from "@reduxjs/toolkit";

const fetchSlice = createSlice({
  name:'fetching',
  initialState:false,
  reducers:{
    serializeFetching:(state)=>{
      return true;
    },
    deserializeFetching:(state)=>{
      console.log('deserializeFetching')
      return false;
    }
  }
})

export default fetchSlice;
export const fetchSliceAction = fetchSlice.actions;