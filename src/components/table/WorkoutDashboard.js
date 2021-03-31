import { Button } from 'react-bootstrap'
import React from 'react'

class WorkoutDashboard extends React.Component {


  render(){
    const {workout, exercise} = this.props
    return(
      <>
      <Button id={workout.id} value={exercise.exercise_type} variant="dark" onClick={(event) => this.handleOnClick(event)}>{exercise.name}</Button>
      </>
    )}


  handleOnClick(event){
      console.log(event.target.id)
      console.log(event.target.value)
    }
}

export default WorkoutDashboard