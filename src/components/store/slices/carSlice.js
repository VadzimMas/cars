import {createSlice, nanoid} from "@reduxjs/toolkit";

const carSlice = createSlice({
  name: 'cars',
  initialState: {
    searchTerm: '',
    data: []
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload
    },
    addCar(state, action) {
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid()
      })
    },
    deleteCar(state, action) {
      state.data = state.data.filter((car) => {
        return car.id !== action.payload
      })
    }
  }
})

export const {changeSearchTerm, addCar, deleteCar} = carSlice.actions
export const carReducer = carSlice.reducer