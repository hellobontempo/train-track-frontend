import React from 'react'
import Table from 'react-bootstrap/Table';

export const Program = ({program}) => {
  

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
            {weekOne.map(exercise => {
              return (
                <td>{exercise.name}</td>
              )
            })}
          </tr>
          <tr>
            <td>Week 2 </td>
            {weekTwo.map(exercise => {
              return (
                <td>{exercise.name}</td>
              )
            })}
          </tr>
          <tr>
            <td>Week 3 </td>
            {weekThree.map(exercise => {
              return (
                <td>{exercise.name}</td>
              )
            })}
          </tr>
          <tr>
            <td>Week 4 </td>
            {weekFour.map(exercise => {
              return (
                <td>{exercise.name}</td>
              )
            })}
          </tr>
          <tr>
            <td>Week 5 </td>
            {weekFive.map(exercise => {
              return (
                <td>{exercise.name}</td>
              )
            })}
          </tr>
          <tr>
            <td>Week 6 </td>
            {weekSix.map(exercise => {
              return (
                <td>{exercise.name}</td>
              )
            })} 
            <td> RACE DAY </td>
          </tr>
        </tbody>
      </Table>
      )
}