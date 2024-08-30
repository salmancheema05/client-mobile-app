import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Doctor } from "../types/doctor";
interface DoctorState {
  list: Doctor[];
}
const initialState: DoctorState = {
  list: [],
};
const favoriteList = createSlice({
  name: "FavoriteList",
  initialState,
  reducers: {
    favoriteData(state, action: PayloadAction<Doctor>) {
      const exists = state.list.some(
        (doctor) => doctor.id === action.payload.id
      );
      if (!exists) {
        state.list.push(action.payload);
      }
    },
  },
});
export const { favoriteData } = favoriteList.actions;
export const favoriteDataSelector = (state: RootState) => state.persisted;
export default favoriteList.reducer;
