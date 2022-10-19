import React from "react";
import { addUserProgram } from "../actions/actions";
import { connect } from "react-redux";
import Checkbox from "./littleHelpers/Checkbox";
import { Col, Button, Row } from "react-bootstrap";
import PopupModal from "./PopupModal";
import DocumentTitle from "react-document-title";
import { differenceInWeeks } from "date-fns";
class ProgramForm extends React.Component {
  state = {
    race_date: "",
    username: "",
    length_in_weeks: "",
    program_id: "1",
    checkedExercises: {},
    selectAllButton: "Select All",
    renderPopup: false,
    disableSelectWeeks: true,
  };

  renderCheckboxes() {
    return this.props.exercises.map((exercise) => {
      return (
        <div
          key={`checkbox-exercise-div-${exercise.id}`}
          className="form-check form-inline"
        >
          <Checkbox
            className="form-check-input"
            key={`exercise-${exercise.id}`}
            name={exercise.id}
            checked={this.state.checkedExercises[`${exercise.id}`]}
            onChange={this.handleCheckChange}
          />
          <label className="has-padding-left form-check-label">
            {exercise.name}
          </label>
        </div>
      );
    });
  }

  handleCheckChange = (event) => {
    const exercise = event.target.name;
    const isChecked = event.target.checked;
    this.setState({
      ...this.state,
      checkedExercises: {
        ...this.state.checkedExercises,
        [exercise]: isChecked,
      },
    });
  };

  calculateWeeks = () => {
    const today = new Date();
    const raceDate = new Date(this.state.race_date);
    const weeks = differenceInWeeks(raceDate, today);
    this.setState({
      ...this.state,
      length_in_weeks: weeks,
    });
  };

  handleSelectAll = (event) => {
    let ids = this.props.exercises.map((exercise) => exercise.id);
    let allChecked = {};
    let isChecked;
    let buttonText;
    if (event.target.innerHTML === "Select All") {
      isChecked = true;
      buttonText = "Unselect All";
    } else {
      isChecked = false;
      buttonText = "Select All";
    }
    ids.map((id) => (allChecked[id] = isChecked));
    this.setState({
      ...this.state,
      checkedExercises: allChecked,
      selectAllButton: buttonText,
    });
  };

  handleInputChange = ({ target }) => {
    const value = target.value;
    const name = target.name;
    this.setState({
      ...this.state,
      [name]: value,
    });
    if (this.state.race_date !== "") {
      this.setState({
        disableSelectWeeks: false,
      });
    }
  };

  handleOnSubmit = (event) => {
    event.preventDefault();
    const newProgram = {
      user_program: {
        race_date: this.state.race_date,
        username: this.state.username,
        preferred_exercise_ids: Object.keys(this.state.checkedExercises),
        length_in_weeks: this.state.length_in_weeks,
        program_id: this.state.program_id,
      },
    };
    this.props.addUserProgram(newProgram);
    setTimeout(
      function () {
        this.setState({ renderPopup: true });
      }.bind(this),
      500
    );
    this.setState({
      race_date: "",
      username: "",
      length_in_weeks: "",
      program_id: "1",
      checkedExercises: {},
      selectAllButton: "Select All",
    });
  };

  render() {
    return (
      <DocumentTitle title="Create a Program Form">
        <div className="formDiv">
          {this.state.renderPopup ? <PopupModal /> : ""}
          <form className="form" onSubmit={this.handleOnSubmit}>
            <Row className="has-padding-bottom">
              <Col>
                <label htmlFor="username" className="form-inline">
                  Your Name:
                </label>
                <input
                  id="username"
                  className="form-control"
                  name="username"
                  type="text"
                  value={this.state.username}
                  onChange={this.handleInputChange}
                />
              </Col>
            </Row>
            <Row className="has-padding-bottom">
              <Col>
                <label htmlFor="race date" className="form-inline">
                  Enter Race Date:
                </label>
                <input
                  aria-label="race date"
                  className="form-control"
                  name="race_date"
                  type="date"
                  value={this.state.race_date}
                  onChange={this.handleInputChange}
                />
              </Col>
              <Col>
                <label className="form-inline">Select race length:</label>
                <select
                  className="form-control"
                  name="program_id"
                  value={this.state.program_id}
                  onChange={this.handleInputChange}
                >
                  <option value="1">Half Marathon</option>
                  <option value="2">Full Marathon</option>
                </select>
              </Col>
            </Row>
            <Row className="has-padding-bottom">
              <Col>
                <label htmlFor="training length" className="form-inline">
                  How many weeks do you want to train?
                </label>
                <div className="is-nowrap">
                  <Button
                    disabled={this.state.disableSelectWeeks}
                    className="float-left"
                    variant="dark"
                    onClick={this.calculateWeeks}
                    size="sm"
                  >
                    Click to start training this week!
                  </Button>
                  <input
                    disabled={this.state.disableSelectWeeks}
                    id="training length"
                    className="form-control is-half-width"
                    name="length_in_weeks"
                    type="number"
                    min="4"
                    max="24"
                    value={this.state.length_in_weeks}
                    onChange={this.handleInputChange}
                  />
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="form-inline">
                  Choose Your Preferred Cross Training Activities:
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button
                  className="float-left"
                  variant="dark"
                  onClick={this.handleSelectAll}
                  size="sm"
                >
                  {this.state.selectAllButton}
                </Button>
              </Col>
            </Row>
            {this.props.exercises ? (
              this.renderCheckboxes()
            ) : (
              <p>exercises coming..</p>
            )}
            <div className="has-padding-top">
              <Button
                variant="light"
                className="form-control"
                aria-label="submit"
                type="submit"
              >
                Generate custom training program!
              </Button>
            </div>
          </form>
        </div>
      </DocumentTitle>
    );
  }
}

const mapStateToProps = ({ exercises }) => {
  return {
    exercises: exercises.filter((e) => e.exercise_type === "cross_train"),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addUserProgram: (newProgram) => dispatch(addUserProgram(newProgram)),
    // fetchExercises: () => dispatch(fetchExercises())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProgramForm);
