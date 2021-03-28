import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import TableHeader from './TableHeader';
import Week from './Week';

const CustomTable = ({program}) => {

  const dateArray = program.start_date.split("-").map( n => parseInt(n))
  const startDate = new Date(dateArray[0], dateArray[1]-1, dateArray[2]) 
  const startIndex = startDate.getDay() 


  function createDaysBeforeProgram() {
    let daysBeforeProgram = []
    let date = startDate
    date.setDate(date.getDate() - 1)
    let i = startDate.getDay()
    do {
      daysBeforeProgram = [...daysBeforeProgram, {date: date.toISOString().split("T")[0]}]
      date.setDate(date.getDate() -1);
      i -= 1;
    } while (i > -1);
    return daysBeforeProgram.reverse()
  }


  function week () {
    let startDay = 0;
    let endWeek = 7;
    let programWeeks = [];
    let daysForTable = program.custom_programs
    if (startIndex !== 0) {
      daysForTable = createDaysBeforeProgram().concat(daysForTable)
    }

    const totalTableCells = daysForTable.length 
    for (let day = 1; day < totalTableCells + 1; day+=7){
        let weeklyExercises = daysForTable.slice(startDay, endWeek);
        programWeeks.push(<Week weeklyExercises={weeklyExercises}/>)
        startDay = endWeek 
        endWeek += 7
    }
    return programWeeks

  }

  function displayWeeks(){
   return ( 
      week().map(week => {
          return (      
             <tr>{week}</tr>
      )}))
  }
 
  return (
        <Fragment>
          <Container>
            <Table striped bordered>
              <thead>
                < TableHeader/>
              </thead>
              <tbody>
                  {program ? displayWeeks() : <h1>nada</h1>}
              </tbody>
            </Table>
            </Container>
        </Fragment>
  
  )
}

export default CustomTable