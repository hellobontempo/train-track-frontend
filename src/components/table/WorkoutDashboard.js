import { Button, Col, Modal, Row } from 'react-bootstrap'
import React from 'react'
import { displayDate } from '../littleHelpers/helperFunctions'
import { connect } from 'react-redux';
import { editUserProgram } from '../../actions/actions'

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
    console.log(this.props)
    const {workout, exercise} = this.props
    return(
      <>
      <Button id={workout.id} value={exercise.exercise_type} variant="dark" onClick={this.showModal}>{exercise.name}</Button>
      <Modal show={this.state.show} onHide={this.hideModal} animation={false}> 
        <Modal.Header>
          <Modal.Title>Edit <u>{exercise.name}</u> on {displayDate(workout.workout_date)}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <Row>
            <Col>
              <select className="form-control">
                {this.props.exercises.map(exercise => {
                  return <option>{exercise.name}</option>
                })}
              </select>
            </Col>
            <Col>
              <input className="form-control" type="submit">Change Exercise</input>
            </Col>
            </Row>
          </form>
        </Modal.Body> 
        <Modal.Footer>
          <Button variant="secondary" onClick={this.hideModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    
      </>
    )};



}

const mapStateToProps = ({exercises}) => {
  return {
      exercises}
}

export default connect(mapStateToProps, {editUserProgram})(WorkoutDashboard)