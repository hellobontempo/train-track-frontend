

const Week = props => {

  console.log("week", props)

    return (
        props.programExercises.map(programEx => {
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