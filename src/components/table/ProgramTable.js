import React, { Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import TableHeader from './TableHeader';
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

  function header(){
    if (props.custom){
      return <TableHeader startDay={props.custom.start_date} firstRest={props.custom.first_rest_day} secondRest={props.custom.second_rest_day}/>
    }else{
      return <TableHeader/>
    }
  }

  function renderTable(){
    return (
      <div>
        <br></br>
        <Container>
          <h1>{props.program.title}</h1>
          <Table striped bordered hover>
            <thead>
             {header()}
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
      {props.program ? renderTable() : <h1>Loading...</h1>}
    </Fragment>
    )
}



export default ProgramTable