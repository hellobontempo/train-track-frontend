import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import Week from './Week';

const ProgramTable = (props) => {
  console.log(props)
  function week(){
    const totalWeeks = props.program.length_in_weeks
    let startDay = 0;
    let nextWeek;
    let programWeeks = []
    for (let weekNumber = 1; weekNumber < totalWeeks + 1; weekNumber++){
        nextWeek = weekNumber * 7 ;
        let weeklyExercises = props.program.exercises.slice(startDay, nextWeek);
        let programExercises = props.program.program_exercises.slice(startDay, nextWeek);
        startDay += 7;
        programWeeks.push(<Week weekNumber={weekNumber} exercises={weeklyExercises} programExercises={programExercises}/>)
      }
     return programWeeks

  }

  function renderTable(){
    return (
      <div>
        <br></br>
        <Container>
          <h1>{props.program.title}</h1>
          <Table striped bordered hover>
            <thead>
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
              {week().map(week => {
                return (      
                  <tr>{week}</tr>
              )
              })}
        
            </tbody>
          </Table>
          </Container>
      </div>
    )
  }


  return (
    <Fragment>
      { props.program ? renderTable() : <div>Not Found</div>}
    </Fragment>
    )
}



export default ProgramTable