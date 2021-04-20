import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import TableHeader from './TableHeader';
import Week from './Week';
import { dateStringToObject } from '../littleHelpers/helperFunctions'
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const CustomTable = ({program}) => {

  const startDate = dateStringToObject(program.start_date)
  const endDate = dateStringToObject(program.race_date)
  const startIndex = startDate.getDay() 
  const endIndex = endDate.getDay() 

  function createDaysBeforeProgram() {
    let daysBeforeProgram = []
    let date = startDate
    let i = startIndex
    date.setDate(date.getDate() - 1)
    do {
      daysBeforeProgram = [...daysBeforeProgram, {date: date.toISOString().split("T")[0]}]
      date.setDate(date.getDate() -1);
      i -= 1;
    } while (i > 0);
    return daysBeforeProgram.reverse()
  }

  function createDaysAfterProgram() {
    let daysAfterProgram = []
    let date = endDate
    date.setDate(date.getDate() + 1)
    let i = endIndex
    do {
      daysAfterProgram = [...daysAfterProgram, {date: date.toISOString().split("T")[0]}]
      date.setDate(date.getDate() + 1);
      i += 1;
    } while (i < 6);
    return daysAfterProgram
  }


  function createWeeks () {
    let startDay = 0;
    let endWeek = 7;
    let programWeeks = [];
    let daysForTable = program.custom_programs
    if (startIndex !== 0) {
      daysForTable = createDaysBeforeProgram().concat(daysForTable).concat(createDaysAfterProgram())
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
      createWeeks().map(week => {
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
                  {program ? displayWeeks() : <Loader type="TailSpin" color="#FD8A61" height={50} width={50} />}
              </tbody>
            </Table>
            </Container>
        </Fragment>
  
  )
}

export default CustomTable