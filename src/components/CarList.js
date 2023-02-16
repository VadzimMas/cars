import {useDispatch, useSelector} from "react-redux";
import {deleteCar} from "./store";

function CarList() {
  const dispatch = useDispatch()


  const {cars, formName} = useSelector(({form, cars: {data, searchTerm}}) => {

    const filteredCars = data.filter((car) =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return {
      cars: filteredCars,
      formName: form.name
    }
  })

  const handleCarDelete = (car) => {
    dispatch(deleteCar(car.id))
  }

  const renderedCars = cars.map((car) => {
    const bold = formName && car.name.toLowerCase().includes(formName.toLowerCase())

    return (
      <div key={car.id} className={`panel ${bold && 'bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className='button is-danger'
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    )
  })

  return (
    <div className='car-list'>
      {renderedCars}
      <hr/>
    </div>
  )
}

export default CarList