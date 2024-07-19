import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUser } from "@/common/utils/users.util";


// Get user from localStorage
const user = getUser();
const initialState = {
  aiBoomData: {},
};

export const aiBoomSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleAiBoomData: (state: any, action: any) => {
      state.aiBoomData = action.payload;
    },
  },
});

export const { handleAiBoomData } = aiBoomSlice.actions;

export default aiBoomSlice.reducer;
