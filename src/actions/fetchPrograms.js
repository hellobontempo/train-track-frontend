//make url const? 

export function fetchPrograms() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_TRAINING_PROGRAMS' });
      fetch('http://localhost:3000/programs')
        .then(response => response.json())
        // .then(trainingProgram => console.log(trainingProgram));
        .then(programs => dispatch({ type: 'ADD_PROGRAMS', programs }));
    };
  } 