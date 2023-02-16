import {configureStore} from '@reduxjs/toolkit'
import {formReducer, changeName, changeCost} from "./slices/formSlice";
import {carReducer, changeSearchTerm, addCar, deleteCar} from "./slices/carSlice";

const store = configureStore({
        reducer: {
            form: formReducer,
            cars: carReducer,
        }
    }
)

export {
    store,
    changeName,
    changeCost,
    changeSearchTerm,
    addCar,
    deleteCar,
}