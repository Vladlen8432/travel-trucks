import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  bookingDate: "",
  comments: "",
};

const bookFormSlice = createSlice({
  name: "bookForm",
  initialState,
  reducers: {
    updateForm: (state, action) => {
      return { ...state, ...action.payload };
    },
    resetForm: () => initialState,
  },
});

export const { updateForm, resetForm } = bookFormSlice.actions;
export default bookFormSlice.reducer;
