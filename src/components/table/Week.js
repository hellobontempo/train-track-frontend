import React from 'react'
import { connect } from 'react-redux'


class Week extends React.Component{

    

      render(){
        console.log(this.props)
        return (
          this.props.weeklyExercises.map(exercise => {
            return (
              <td>{exercise.workout_date}</td>
            )
          })
              
        )}
}

const mapStateToProps = state => {
  return {
    exercises: state.exercises
  }
}
export default connect(mapStateToProps)(Week)