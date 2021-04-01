import React from 'react'
import { addUserProgram } from '../actions/actions'
import { connect } from 'react-redux'
import Checkbox from './littleHelpers/Checkbox'
import { Col, Button, Row } from 'react-bootstrap'

class ProgramForm extends React.Component {

    state = {
        race_date: "",
        username: "",
        length_in_weeks: "",
        program_id: "",
        checkedExercises: {},
        selectAllButton: "Select All"
    }
 
    renderCheckboxes (){
    return this.props.exercises.map(exercise => {
            return (
                <div className="form-check form-inline">
                <Checkbox className="form-check-input" key={`exercise-${exercise.id}`} name={exercise.id} checked={this.state.checkedExercises[`${exercise.id}`]} onChange={this.handleCheckChange} />
                <label className="form-check-label">{exercise.name}</label>
                </div>
            )
        })
    }

    handleCheckChange = event => {
        const exercise = event.target.name
        const isChecked = event.target.checked
        this.setState({
            ...this.state,
            checkedExercises: {
                ...this.state.checkedExercises,
               [exercise]: isChecked
            }
        })
        console.log(this.state)
    }
    
  
    handleSelectAll = (event) => {
        let ids = this.props.exercises.map(exercise => exercise.id);
        let allChecked = {} ;
        let isChecked;
        let buttonText;
        if (event.target.innerHTML === "Select All"){
            isChecked = true;
            buttonText = "Unselect All";
        }else {
            isChecked = false;
            buttonText = "Select All";
        };
        ids.map(id => allChecked[id] = isChecked);
        this.setState({
            ...this.state, 
            checkedExercises: allChecked,
            selectAllButton: buttonText
            })
    }


    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            ...this.state,
            [name]: value
        })
        console.log(this.state)
    }



    handleOnSubmit = event => {
        event.preventDefault()
        const newProgram = {
            user_program: {
            race_date: this.state.race_date,
            username: this.state.username,
            preferred_exercise_ids: Object.keys(this.state.checkedExercises),
            length_in_weeks: this.state.length_in_weeks, 
            program_id: this.state.program_id,}
        }
        this.props.addUserProgram(newProgram)
        this.setState({
            race_date: "",
            username: "",
            length_in_weeks: "",
            program_id: "",
            checkedExercises: {},
            selectAllButton: "Select All"
        })
    }

    render(){
        return(
            <div className="formDiv">
                <form className="form" onSubmit={this.handleOnSubmit}>
                <Row>
                    <Col>
                    <label className="form-inline">Enter Race Date:</label>
                        <input 
                        className="form-control"
                        name="race_date" 
                        type="date"
                        value={this.state.race_date}
                        onChange={this.handleInputChange} />
                    
                    </Col>
                    <Col>
                    <label className="form-inline">Your Name:</label>
                        <input
                        className="form-control"
                        name="username" 
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInputChange}/>
                    </Col>
                </Row>
                <br></br>
                <Row>
                    <Col>
                    <label className="form-inline">How many weeks do you want to train?</label>
                        <input
                        className="form-control"
                        name="length_in_weeks" 
                        type="number"
                        min="4" 
                        max="12"
                        value={this.state.length_in_weeks}
                        onChange={this.handleInputChange}/>
                    </Col>
                    <Col>
                    <label className="form-inline">Choose a race:</label>
                        <select
                        className="form-control"
                        name="program_id" 
                        value={this.state.program_id}
                        onChange={this.handleInputChange}>
                        <option value="1">Half Marathon</option>
                        <option value="2">Full Marathon</option>
                        </select>
                    </Col>
                </Row>
                    <Col>
                        <br></br>
                        <label className="form-inline">Choose Your Preferred Cross Training Activities:</label>
                    </Col>
                    <Button className="float-left" variant="dark" onClick={this.handleSelectAll} size="sm">{this.state.selectAllButton}</Button>
                    <br></br><br></br>
                    {this.props.exercises ? this.renderCheckboxes() : <p>exercises coming..</p>}
                    <input 
                    className="form-control"
                    type="submit"/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({exercises}) => {
    console.log(exercises)
    return {
        exercises: exercises.filter(e => e.exercise_type === "cross_train")}
}

const mapDispatchToProps = dispatch => {
    return {
        addUserProgram: (newProgram) => dispatch(addUserProgram(newProgram)),
        // fetchExercises: () => dispatch(fetchExercises())
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(ProgramForm)