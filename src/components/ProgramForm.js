import React from 'react'
import { addUserProgram } from '../actions/actions'
import { connect } from 'react-redux'

class ProgramForm extends React.Component {

    state = {
        race_date: "",
        username: "",
        first_rest_day: 0,
        second_rest_day: 5,
        program_id: 1,
        exercises: {
            yoga: "yoga",
            cycling: "cycling",
            swimming: "swimming"
        },
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

    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
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
        this.props.addUserProgram(this.state)
        this.setState({
            race_date: "",
            username: "",
            first_rest_day: 0,
            second_rest_day: 5,
            program_id: 1
        })
    }
    render(){
        return(
            <div className="formDiv">
                <form className="form" onSubmit={this.handleOnSubmit}>
                    <label for="date">Enter Race Date</label>
                    <input 
                    className="form-control"
                        name="race_date" 
                        type="date"
                        value={this.state.race_date}
                        onChange={this.handleInputChange} /><br></br>
                    <label for="username">Your Name:</label>
                    <input 
                        className="form-control"
                        name="username" 
                        type="text"
                        value={this.state.username}
                        onChange={this.handleInputChange}/><br></br>
                    <label for="rest-day-one-select">Select Rest Days:
                    </label>
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
                    </select><br></br>
                    <label for="cross_train">Choose Your Preferred Cross Training Activities:</label>
                    <div className="form-inline">
                        <input
                            className="form"
                            value={this.state.exercises.yoga}
                            onChange={this.handleInputChange}
                            name="yoga"
                            type="checkbox"
                            value="yoga"
                        /><label for="yoga">
                            Yoga
                        </label>
                    </div>
                    <div className="form-inline">   
                        <input 
                            className="form"
                            value={this.state.exercises.cycling}
                            onChange={this.handleInputChange}
                            name="cycling"
                            type="checkbox"
                        /><label for="cycling">
                            Cycling
                        </label>
                    </div>
                    <div className="form-inline">   
                        <input 
                            className="form"
                            value={this.state.exercises.swimming}
                            onChange={this.handleInputChange}
                            name="swimming"
                            type="checkbox"
                            value="swimming"
                        /><label for="swimming">
                            Swimming
                        </label>
                    </div>
                    <input 
                    className="form-control"
                    type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, { addUserProgram })(ProgramForm)