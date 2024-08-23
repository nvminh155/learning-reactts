import { createSlice } from "@reduxjs/toolkit";

export interface ModalState {
  isOpen: boolean;
}

const initialState: ModalState = {
  isOpen: false,
};

export const counterSlice = createSlice({
  name: "toogleModal",
  initialState,
  reducers: {
    toogleModal: (state) => {
      state.isOpen = !state.isOpen;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toogleModal } = counterSlice.actions;

export default counterSlice.reducer;
