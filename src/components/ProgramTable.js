import React from 'react'
import Table from 'react-bootstrap/Table';
import Week from './Week';

export const ProgramTable = ({program}) => {
  // let total_weeks = program.length_in_weeks

  // function week(){
  //   let start_day = 0;
  //   let nextWeek;
  //   for (let week_number = 1; week_number = total_weeks; week_number++){
  //     nextWeek = (week_number*7);
  //     let weekly_exercises = program.exercises.slice(start_day, nextWeek);
  //     start_day+=7;
  //    return (  < Week exercises={weekly_exercises} />)}
  // }


  const weekOne = program.exercises.slice(0, 7)
  const weekTwo = program.exercises.slice(7, 14)
  const weekThree = program.exercises.slice(14, 21)
  const weekFour = program.exercises.slice(21, 28)
  const weekFive = program.exercises.slice(28, 35)
  const weekSix = program.exercises.slice(35, 41)
  // debugger

       return (
        <Table striped bordered hover className="tableDiv">
        <thead>
          <h1>{program.title} </h1>
          <tr>
            <th>*</th>
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
          <tr>
            <td>Week 1</td>
            < Week exercises={weekOne}/>
          </tr>
          <tr>
            <td>Week 2 </td>
            < Week exercises={weekTwo}/>
          </tr>
          <tr>
            <td>Week 3 </td>
            < Week exercises={weekThree}/>
          </tr>
          <tr>
            <td>Week 4 </td>
            < Week exercises={weekFour}/>
          </tr>
          <tr>
            <td>Week 5 </td>
            < Week exercises={weekFive}/>
          </tr>
          <tr>
            <td>Week 6 </td>
            < Week exercises={weekSix}/>
            <td> RACE DAY </td>
          </tr>
        </tbody>
      </Table>
      )
}