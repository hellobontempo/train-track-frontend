
const Week = ({exercises}) => {
console.log(exercises)


    return (
      exercises.map(exercise => {
        return (
          <td>{exercise.workout_date}</td>
        )
      })
          
    )
}

export default Week