import React from 'react'
import { Link, Route } from 'react-router-dom'
import { addUserProgram } from '../actions/actions'
import { connect } from 'react-redux'
class Home extends React.Component {

    state = {
        raceDate: "",
        restDayOne: "",
        restDayTwo: "",
        programId: 1
    }

    handleOnSubmit = (event) => {

        event.preventDefault()
        this.setState({
            raceDate: event.target.raceDate.value,
            restDayOne: parseInt(event.target.restDayOne.value),
            restDayTwo: parseInt(event.target.restDayTwo.value)
        })
        this.props.addUserProgram(this.state)
       
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleOnSubmit} className="form">
                    <label for="date">Enter Race Date</label>
                    <input name="raceDate" type="date"/><br></br>
                    <label for="username">Your Name:</label>
                    <input name="username" type="text"/><br></br>
                    <label for="rest-day-select">Choose Rest Days:</label>
                    <select name="restDayOne">
                        <option value="0">Sunday</option>
                        <option value="1">Monday</option>
                        <option value="2">Tuesday</option>
                        <option value="3">Wednesday</option>
                        <option value="4">Thursday</option>
                        <option value="5">Friday</option>
                        <option value="6">Saturday</option>
                    </select>
                    <select name="restDayTwo">
                        <option value="0">Sunday</option>
                        <option value="1">Monday</option>
                        <option value="2">Tuesday</option>
                        <option value="3">Wednesday</option>
                        <option value="4">Thursday</option>
                        <option value="5">Friday</option>
                        <option value="6">Saturday</option>
                    </select><br></br>
                    <input type="submit"/>
                </form>
           </div>
        )
    }
}

export default connect(null, { addUserProgram })(Home)