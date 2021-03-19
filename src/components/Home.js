import React from 'react'
import { addUserProgram } from '../actions/actions'
import { connect } from 'react-redux'

class Home extends React.Component {

    state = {
        race_date: "",
        username: "",
        first_rest_day: 0,
        second_rest_day: 0,
        program_id: 1
    }

    handleInputChange = (event) => {
        const target = event.target
        const value = target.value
        const name = target.name
        this.setState({
            [name]: value
        })
    }

    handleOnSubmit = event => {
        console.log("props in submit", this.props)
        event.preventDefault()
        console.log("state", this.state)
        this.props.addUserProgram(this.state)
        this.setState({
            race_date: "",
            username: "",
            first_rest_day: 0,
            second_rest_day: 0,
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
                    <label for="rest-day-one-select">Rest Day One:</label>
                    <select 
                        className="form-control"
                        name="first_rest_day"
                        value={this.state.first_rest_day}
                        onChange={this.handleInputChange}>
                        <option value="0">Sunday</option>
                        <option value="1">Monday</option>
                        <option value="2">Tuesday</option>
                        <option value="3">Wednesday</option>
                        <option value="4">Thursday</option>
                        <option value="5">Friday</option>
                        <option value="6">Saturday</option>
                    </select>
                    <label for="rest-day-two-select">Rest Day Two:</label>
                    <select 
                        className="form-control"
                        name="second_rest_day"
                        value={this.state.second_rest_day}
                        onChange={this.handleInputChange}>
                        <option value="0">Sunday</option>
                        <option value="1">Monday</option>
                        <option value="2">Tuesday</option>
                        <option value="3">Wednesday</option>
                        <option value="4">Thursday</option>
                        <option value="5">Friday</option>
                        <option value="6">Saturday</option>
                    </select><br></br>
                    <input 
                    className="form-control"
                    type="submit"/>
                </form>
            </div>
        )
    }
}

export default connect(null, { addUserProgram })(Home)