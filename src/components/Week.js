

const Week = props => {

  function weekLength(){
    if (props.exercises.length !== 7){
      props.exercises.push({id:"race", name: "RACE DAY!"})
      props.programExercises.push({exercise_id:"race", miles: null })
    }
    return props
  }

    return (
        weekLength().programExercises.map(programEx => {
          let exercise = props.exercises.find( e => e.id === programEx.exercise_id)
            return (
              <td> 
                <div>
                  {exercise.name}<br></br>
                  {programEx.miles === null ? `` : `${programEx.miles} miles`}
                </div>
              </td>
            )
          })
    )
}

export default Week