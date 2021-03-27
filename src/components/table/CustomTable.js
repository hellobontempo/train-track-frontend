import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import TableHeader from './TableHeader';
import Week from './Week';

const CustomTable = ({program}) => {

  const dateArray = program.start_date.split("-").map( n => parseInt(n))
  const startDate = new Date(dateArray[0], dateArray[1]-1, dateArray[2]) //.getDay()


  function setDates() {
    let daysBeforeProgram = []
    let date = startDate
    date.setDate(date.getDate() -1)
    let i = startDate.getDay()
    do {
      daysBeforeProgram = [...daysBeforeProgram, {date: date.toISOString().split("T")[0]}]
      date.setDate(date.getDate() -1);
      i -= 1;
    }while (i > -1);
    console.log(daysBeforeProgram.reverse())
    return daysBeforeProgram.reverse()
  }


  function week () {
    let startDay = 0;
    let endWeek = 7;
    let programWeeks = []
    const addedDays = setDates().concat(program.custom_programs)
    const totalTableCells = addedDays.length 
    for (let day = 1; day < totalTableCells + 1; day+=7){
        let weeklyExercises = addedDays.slice(startDay, endWeek);
        programWeeks.push(<Week weeklyExercises={weeklyExercises}/>)
        startDay = endWeek 
        endWeek += 7
    }
    console.log(programWeeks)
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

// class  CustomTable extends React.Component {
  
//   state = {
//     program: this.props.program
//   }

//    header(){
//     const tableHeader = ["Week Number", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//     return tableHeader.map(day => <th>{day}</th>)
//   }

//    componentDidMount (){
//     let startDay = 0;
//     let endWeek;
//     let programWeeks = []
//     const totalDays = this.props.program.custom_programs.length
//     for (let day = 1; day < totalDays + 1; day+=7){
//         endWeek += 7
//         let weeklyExercises = this.props.program.custom_programs.slice(startDay, endWeek);
//         // programWeeks.push(<Week exercises={weeklyExercises} programExercises={programExercises}/>)
//         startDay = day
//         programWeeks.push(weeklyExercises)
//         console.log("programweeks", programWeeks)

//      return programWeeks}


//   }
//   render(){
//     console.log(this.props)
//       return(

//         <Fragment>
//           <Container>
//             <Table striped bordered hover>
//               <thead>
//                 {this.header()}
//               </thead>
//               <tbody>
//                   {this.state.program ? <h1>got em</h1> : <h1>nada</h1>}
//                 {/* {week().map(week => {
//                   return (      
//                     <tr>{week}</tr>
//                 )
//                 })} */}
            
//               </tbody>
//             </Table>
//             </Container>
//         </Fragment>
//       )  
//     }}

export default CustomTable