import React from 'react'
import { Link, Route } from 'react-router-dom'

class Home extends React.Component {

    render(){
        return(
            <div>
                <form className="form">
                    <label for="date">Enter Race Date</label>
                    <input type="date"/><br></br>
                    <label for="rest-day-select">Choose Rest Days:</label>
                    <select name="first-rest-day">
                        <option value="0">Sunday</option>
                        <option value="1">Monday</option>
                        <option value="2">Tuesday</option>
                        <option value="3">Wednesday</option>
                        <option value="4">Thursday</option>
                        <option value="5">Friday</option>
                        <option value="6">Saturday</option>
                    </select>
                    <select name="second-rest-day">
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

export default Home