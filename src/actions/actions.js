const baseURL = 'http://localhost:3000'

export function fetchPrograms() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_TRAINING_PROGRAMS' });
    fetch(`${baseURL}/programs`)
      .then(response => response.json())
      .then(programs => dispatch({ type: 'FETCH_TRAINING_PROGRAMS', programs }));
  };
} 

export function fetchUserPrograms() {
  return (dispatch) => {
    dispatch({ type: 'LOADING_USER_PROGRAMS' });
    fetch(`${baseURL}/user_programs`)
      .then(response => response.json())
      .then(userPrograms => dispatch({ type: 'FETCH_USER_PROGRAMS', userPrograms }));
  };
} 

export const addUserProgram = newProgram => {
  return dispatch => {
    fetch(`${baseURL}/user_programs`, {
      method: 'POST',
      body: JSON.stringify(newProgram),
      headers: { 
        'Content-Type': 'application/json',
        'Accepts': 'application/json'}
    })
    .then(resp => resp.json())
    .then(newProgram => dispatch({ type: 'ADD_USER_PROGRAM', payload: newProgram }))
  }
}

