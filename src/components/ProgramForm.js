import React from 'react'
import { addUserProgram } from '../actions/actions'
import { connect } from 'react-redux'
import Checkbox from './littleHelpers/Checkbox'
import {fetchExercises} from '../actions/actions'

class ProgramForm extends React.Component {

    state = {
        race_date: "",
        username: "",
        first_rest_day: 0,
        second_rest_day: 5,
        program_id: 1,
        checkedExercises: {},
    }
    // componentDidMount(){
    //     this.props.fetchExercises()
    // }
 
    renderCheckboxes (){
    const checkboxes = this.props.exercises.map(exercise => {
            return (
                <div className="form-check form-inline">
                <div className="form-check-input"><Checkbox name={exercise.id} checked={this.state.checkedExercises[`${exercise.id}`]} onChange={this.handleCheckChange} /></div>
                <label className="form-check-label">{exercise.name}</label>
                </div>
            )
        })
    return checkboxes
    }

    handleCheckChange = event => {
        console.log(this.state)
        const exercise = event.target.name
        const isChecked = event.target.checked
        this.setState({
            ...this.state,
            checkedExercises: {
                ...this.state.checkedExercises,
               [exercise]: isChecked
            }
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
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const newProgram = {
            user_program: {
            race_date: this.state.race_date,
            username: this.state.username,
            preferred_exercise_ids: Object.keys(this.state.checkedExercises),
            program_id: 1,}
        }
        console.log(newProgram)
        this.props.addUserProgram(newProgram)
        this.setState({
            race_date: "",
            username: "",
            first_rest_day: 0,
            second_rest_day: 5,
            program_id: 1,
            checkedExercises: {},
        })
    }
    render(){
        return(
            <div className="formDiv">
                <form className="form" onSubmit={this.handleOnSubmit}>
                    <label>Enter Race Date
                        <input 
                        className="form-control"
                        name="race_date" 
                        type="date"
                        value={this.state.race_date}
                        onChange={this.handleInputChange} />
                    </label>
                    {` `}
                    <label for="username">Your Name:
                        <input
                        className="form-control"
                        name="username" 
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInputChange}/>
                    </label>
                    <br></br>
                    <label for="cross_train">Choose Your Preferred Cross Training Activities:
                      {this.props.exercises ? this.renderCheckboxes() : <p>exercises coming..</p>}
                    </label>
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