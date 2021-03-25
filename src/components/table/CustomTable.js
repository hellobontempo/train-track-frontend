import React, { Fragment } from 'react'
import { Container } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import TableHeader from './TableHeader';
import Week from './Week';

const CustomTable = ({program}) => {

  function week () {
    console.log(program)
    console.log(program.custom_programs)
    let startDay = 0;
    let endWeek = 7;
    let programWeeks = []
    const totalDays = program.custom_programs.length
    for (let day = 1; day < totalDays + 1; day+=7){
        let weeklyExercises = program.custom_programs.slice(startDay, endWeek);
        programWeeks.push(<Week weeklyExercises={weeklyExercises}/>)
        startDay = endWeek 
        endWeek += 7}

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
            <Table striped bordered hover>
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