

const Week = props => {
    return (
        props.exercises.map(exercise => {
            return (
              <td>{exercise.name}</td>
            )
          })
    )
}

export default Week