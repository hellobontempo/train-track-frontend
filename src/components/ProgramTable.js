import React from 'react'
import Table from 'react-bootstrap/Table';
import Week from './Week';

class ProgramTable extends React.Component{
  
  
  week(){
    const totalWeeks = this.props.program.length_in_weeks
    let startDay = 0;
    let nextWeek;
    let programWeeks = []
    for (let weekNumber = 1; weekNumber < totalWeeks + 1; weekNumber++){
        nextWeek = weekNumber * 7 ;
        let weeklyExercises = this.props.program.exercises.slice(startDay, nextWeek);
        startDay += 7;
        programWeeks.push(<Week weekNumber={weekNumber} exercises={weeklyExercises}/>)
      }
     return programWeeks

  }

  render (){
    console.log(this.week())
       return (
        <Table striped bordered hover className="tableDiv">
        <thead>
          <h1>{this.props.program.title} </h1>
          <tr>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>
        <tbody>
          {this.week().map(week => {
            return (
            <tr>{week}</tr>)
          })}
          <tr>
            <td>RACE DAY</td>
          </tr>
        </tbody>
      </Table>
      )}
}



export default ProgramTable