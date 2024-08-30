import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { Doctor } from "../types/doctor";
interface DoctorState {
  list: Doctor[];
}
const initialState: DoctorState = {
  list: [],
};
const doctorList = createSlice({
  name: "doctorList",
  initialState,
  reducers: {
    doctorData(state, action: PayloadAction<Doctor>) {
      state.list.push(action.payload);
    },
    myFavorite(
      state,
      action: PayloadAction<{ doctor_id: number; data: boolean }>
    ) {
      const { doctor_id, data } = action.payload;
      const index = state.list.findIndex((doctor) => doctor.id === doctor_id);
      state.list[index].isFavorite = data;
    },
    clearList: (state) => {
      state.list = [];
    },
  },
});
export const { doctorData, myFavorite, clearList } = doctorList.actions;
export const doctorDataSelector = (state: RootState) => state.doctorList;
export default doctorList.reducer;
