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
        program_id: 1,
        checkedExercises: {},
    }
 
    renderCheckboxes (){
    return this.props.exercises.map(exercise => {
            return (
                <div className="form-check form-inline">
                <div className="form-check-input"><Checkbox name={exercise.id} checked={this.state.checkedExercises[`${exercise.id}`]} onChange={this.handleCheckChange} /></div>
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
        if (event.target.innerHTML === "Select All"){
            isChecked = true;
            event.target.innerHTML = "Unselect All";
        }else {
            isChecked = false;
            event.target.innerHTML = "Select All";
        };
        ids.map(id => allChecked[id] = isChecked);
        this.setState({
            ...this.state, 
            checkedExercises: allChecked
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
            length_in_weeks: 6, 
            program_id: 1,}
        }
        this.props.addUserProgram(newProgram)
        this.setState({
            race_date: "",
            username: "",
            length_in_weeks: "",
            program_id: 1,
            checkedExercises: {},
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
                <Row>
                    <Col>
                    <br></br>
                    <label className="form-inline">Choose Your Preferred Cross Training Activities:</label>
                    </Col>
                </Row>
                    <Button className="float-left" variant="dark" onClick={this.handleSelectAll} size="sm">Select All</Button>
                    <br></br><br></br>
                    <p>{this.props.exercises ? this.renderCheckboxes() : <p>exercises coming..</p>}</p> 
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