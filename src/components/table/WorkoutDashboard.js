import { Button } from 'react-bootstrap'
import React from 'react'

class WorkoutDashboard extends React.Component {

  state = {
    show: false
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render(){
    const {workout, exercise} = this.props
    return(
      <>
      <Button id={workout.id} value={exercise.exercise_type} variant="dark" onClick={this.showModal}>{exercise.name}</Button>
      </>
    )};



}

export default WorkoutDashboard