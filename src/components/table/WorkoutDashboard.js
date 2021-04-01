import { Button, Modal } from 'react-bootstrap'
import React from 'react'
import { displayDate } from '../littleHelpers/helperFunctions'

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
      <Modal show={this.state.show} onHide={this.hideModal} animation={false}>
        <Modal.Header>
          <Modal.Title>Edit <u>{exercise.name}</u> on {displayDate(workout.workout_date)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.hideModal}>
            Close
          </Button>
          <Button variant="dark" onClick={this.hideModal}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    
      </>
    )};



}

export default WorkoutDashboard