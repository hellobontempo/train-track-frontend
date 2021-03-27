import React from 'react'
import { connect } from 'react-redux'
import { displayDate } from '../littleHelpers/helperFunctions'

class Week extends React.Component{

    returnDate(element){
      return element.date ? element.date : element.workout_date
    }

    returnExerciseName(element){
      return element.is_race_day ? 'RACE DAY!' : element.name
    }

    findExercises(){
      return (
        this.props.weeklyExercises.map(workout => {
        let exercise = this.props.exercises.find(exercise => exercise.id === workout.exercise_id)
          return (
            <td>
            <p className="date-background">{displayDate(this.returnDate(workout))}</p>
            <br></br>
            {workout.date ? '*' : this.returnExerciseName(workout)}
            <br></br>
            {workout.miles && !workout.is_race_day ? `${workout.miles} miles` : ``}
            </td>
          )
      }))
    }

      render(){
        console.log(this.props)
        return (
              <>
              {this.props.exercises.length > 0 ? this.findExercises() : <p>Loading..</p>}  
              </>
        )}
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises
  }
}
export default connect(mapStateToProps)(Week)