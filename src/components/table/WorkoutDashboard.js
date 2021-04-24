import { Button, Col, Modal, Row } from "react-bootstrap";
import React, { useState } from "react";
import { displayDate } from "../utils/helperFunctions";
import { connect } from "react-redux";
import { editUserProgram } from "../../actions/actions";

const WorkoutDashboard = (props) => {
  const { workout, exercise } = props;
  const [show, setShow] = useState(false);
  const [formSelect, setFormSelect] = useState(exercise.name);

  const toggleModal = () => {
    setShow(!show);
  };

  const handleChange = (e) => {
    setFormSelect(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.editUserProgram(formSelect, workout.id);
    setFormSelect(formSelect);
  };

  return (
    <>
      <Button variant="dark" onClick={toggleModal}>
        {exercise.name}
      </Button>
      <Modal show={show} onHide={toggleModal} animation={false}>
        <Modal.Header>
          <Modal.Title>
            Edit <u>{exercise.name}</u> on {displayDate(workout.workout_date)}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col>
                <select
                  onChange={handleChange}
                  value={formSelect}
                  className="form-control"
                >
                  <option value="" selected disabled hidden>
                    Select Exercise:
                  </option>
                  {props.exercises.map((exercise) => {
                    return <option value={exercise.id}>{exercise.name}</option>;
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
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const mapStateToProps = ({ exercises }) => {
  return {
    exercises,
  };
};

export default connect(mapStateToProps, { editUserProgram })(WorkoutDashboard);
