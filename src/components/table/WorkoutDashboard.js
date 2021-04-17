import { Button, Col, Modal, Row } from "react-bootstrap";
import React from "react";
import { displayDate } from "../littleHelpers/helperFunctions";
import { connect } from "react-redux";
import { editUserProgram } from "../../actions/actions";

class WorkoutDashboard extends React.Component {
  state = {
    show: false,
    formSelect: "",
    customProgramId: this.props.workout.id,
  };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  handleChange = (e) => {
    this.setState({
      formSelect: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.editUserProgram(
      this.state.formSelect,
      this.state.customProgramId
    );
    this.setState({
      formSelect: "",
    });
  };

  render() {
    const { workout, exercise } = this.props;
    return (
      <>
        <Button variant="dark" onClick={this.showModal}>
          {exercise.name}
        </Button>
        <Modal show={this.state.show} onHide={this.hideModal} animation={false}>
          <Modal.Header>
            <Modal.Title>
              Edit <u>{exercise.name}</u> on {displayDate(workout.workout_date)}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={this.handleSubmit}>
              <Row>
                <Col>
                  <select
                    onChange={this.handleChange}
                    value={this.state.formSelect}
                    className="form-control"
                  >
                    {this.props.exercises.map((exercise) => {
                      return (
                        <option value={exercise.id}>{exercise.name}</option>
                      );
                    })}
                  </select>
                </Col>
                <Col>
                  <input
                    className="form-control"
                    type="submit"
                    value="Edit Exercise"
                  />
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
    );
  }
}

const mapStateToProps = ({ exercises }) => {
  return {
    exercises,
  };
};

export default connect(mapStateToProps, { editUserProgram })(WorkoutDashboard);
