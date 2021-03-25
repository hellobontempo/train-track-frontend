import React from 'react'
import { connect } from 'react-redux'
import DisplayDate from '../littleHelpers/DisplayDate'


class Week extends React.Component{

    findExercises(){
      return (
        this.props.weeklyExercises.map(workout => {
        let exercise = this.props.exercises.find(exercise => exercise.id === workout.exercise_id)
          return (
            <td>
            <u>{DisplayDate(workout.workout_date)}</u>
            <br></br>
            {workout.is_race_day ? 'RACE DAY!' : exercise.name}
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
              {this.props.exercises ? this.findExercises() : <p>Loading..</p>}  
              </>
        )}
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises
  }
}
export default connect(mapStateToProps)(Week)