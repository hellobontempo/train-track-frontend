//make url const? 
const baseURL = 'http://localhost:3000'
export const addUserProgram = newProgram => {
  return dispatch => {
    fetch(`${baseURL}/user_programs`, {
      method: 'POST',
      body: JSON.stringify(newProgram),
      headers: { 'Content-Type': 'application/json'}
    })
    .then(resp => resp.json())
    .then(newProgram => dispatch({ type: 'ADD_USER_PROGRAM', payload: newProgram }))
  }
}

export function fetchPrograms() {
    return (dispatch) => {
      dispatch({ type: 'START_ADDING_TRAINING_PROGRAMS' });
      fetch(`${baseURL}/programs`)
        .then(response => response.json())
        // .then(trainingProgram => console.log(trainingProgram));
        .then(programs => dispatch({ type: 'ADD_PROGRAMS', programs }));
    };
  } 