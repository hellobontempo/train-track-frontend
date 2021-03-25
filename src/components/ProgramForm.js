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
        defaultDisabled: {
            sunday: true,
            monday: true,
            tuesday: false,
            wednesday: true,
            thursday: true,
            friday: false,
            saturday: true,
        }
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

    handleDateDropdownChange = ({target}) => {
        const name = target.name
        const value = parseInt(target.value)
        switch (value) {
            case 0:
                this.setState({
                    [name]: value,
                    defaultDisabled: {
                    sunday: true,
                    monday: true,
                    tuesday: false,
                    wednesday: true,
                    thursday: true,
                    friday: false,
                    saturday: true,
                    }})
            break;
            case 1:
                this.setState({
                    [name]: value,
                    defaultDisabled: {
                        ...this.state.defaultDisabled,
                    sunday: true,
                    monday: true,
                    tuesday: true,
                    wednesday: false,
                    thursday: true,
                    friday: true,
                    saturday: false,
                    }
            })
            break;
            case 2:
                this.setState({
                    [name]: value,
                    defaultDisabled: {
                    sunday: true,
                    monday: true,
                    tuesday: true,
                    wednesday: true,
                    thursday: false,
                    friday: true,
                    saturday: true,
                    }
            })
            break;
            case 3:
                this.setState({
                    [name]: value,
                    defaultDisabled: {
                    sunday: true,
                    monday: false,
                    tuesday: true,
                    wednesday: true,
                    thursday: true,
                    friday: false,
                    saturday: true,
                    }
            })
            break;
            case 4:
                this.setState({
                    [name]: value,
                    defaultDisabled: {
                    sunday: true,
                    monday: true,
                    tuesday: false,
                    wednesday: true,
                    thursday: true,
                    friday: true,
                    saturday: true,
                    }
            })
            break;
            case 5:
                this.setState({
                    [name]: value,
                    defaultDisabled: {
                    sunday: false,
                    monday: true,
                    tuesday: true,
                    wednesday: false,
                    thursday: true,
                    friday: true,
                    saturday: true,
                    }
            })
            break;
            case 6:
                this.setState({
                    [name]: value,
                    defaultDisabled: {
                    sunday: true,
                    monday: false,
                    tuesday: true,
                    wednesday: true,
                    thursday: false,
                    friday: true,
                    saturday: true,
                    }
            })
            break;
            default:
                this.setState({
                    ...this.state
            })
        }
        
    }

    handleOnSubmit = event => {
        event.preventDefault()
        const newProgram = {
            user_program: {
            race_date: this.state.race_date,
            username: this.state.username,
            first_rest_day: this.state.first_rest_day,
            second_rest_day: this.state.second_rest_day,
            exercise_ids: Object.keys(this.state.checkedExercises),
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
            defaultDisabled: {
                sunday: true,
                monday: true,
                tuesday: false,
                wednesday: true,
                thursday: true,
                friday: false,
                saturday: true,
            }
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
                    <label for="rest-day-one-select">Select Rest Days: </label> 
                        <select 
                            className="form-control"
                            name="first_rest_day"
                            value={this.state.first_rest_day}
                            onChange={this.handleDateDropdownChange}>
                            <option value="0">Sunday</option>
                            <option value="1">Monday</option>
                            <option value="2">Tuesday</option>
                            <option value="3">Wednesday</option>
                            <option value="4">Thursday</option>
                            <option value="5">Friday</option>
                            <option value="6">Saturday</option>
                        </select>
                    <p className="text-muted">Week will start on this day of the week.</p>
                        <br></br>
                        <select 
                            className="form-control"
                            name="second_rest_day"
                            value={this.state.second_rest_day}
                            onChange={this.handleInputChange}>
                            <option disabled={this.state.defaultDisabled.sunday} value="0">Sunday</option>
                            <option disabled={this.state.defaultDisabled.monday} value="1">Monday</option>
                            <option disabled={this.state.defaultDisabled.tuesday} value="2">Tuesday</option>
                            <option disabled={this.state.defaultDisabled.wednesday} value="3">Wednesday</option>
                            <option disabled={this.state.defaultDisabled.thursday} value="4">Thursday</option>
                            <option disabled={this.state.defaultDisabled.friday} value="5">Friday</option>
                            <option disabled={this.state.defaultDisabled.saturday} value="6">Saturday</option>
                        </select>   
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