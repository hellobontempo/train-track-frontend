import { Button } from 'react-bootstrap'

const EditWorkoutButton = ({workout, exercise}) => {

    return(
        workout.is_race_day ? 'RACE DAY!' : (<Button id={workout.id} value={exercise.exercise_type} variant="dark" onClick={(event) => handleOnClick(event)}>{exercise.name}</Button> )
    )


    function handleOnClick(event){
      console.log(event.target.id)
      console.log(event.target.value)
    }
}

export default EditWorkoutButton