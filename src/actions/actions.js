const baseURL = 'http://localhost:3000'
// const baseURL = 'https://afternoon-tundra-58524.herokuapp.com'

export const newUser = userData => {
  return (dispatch)=>{
    fetch(`${baseURL}/signup`, {
        method: 'POST',
          body: JSON.stringify(userData),
          headers: { 
            'Content-Type': 'application/json',
            'Accepts': 'application/json'}
      })  
    .then( r => r.json())
    .then( user => {
      if ( !!user.error ){
        dispatch({ type: 'ERROR_MESSAGE', message: user.error, variant: 'danger'})
      } else {
        console.log(user)
        dispatch({ type: 'CREATE_USER', user: userData, variant: 'success' })
      }
    })
  }
}

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
export function fetchExercises() {
  return (dispatch) => {
    fetch(`${baseURL}/exercises`)
      .then(response => response.json())
      .then(exercises => dispatch({ type: 'FETCH_EXERCISES', exercises }));
  };
} 

export const addUserProgram = newProgram => { 
  return dispatch => {
    fetch(`${baseURL}/user_programs`, {
      method: 'POST',
      body: JSON.stringify(newProgram),
      headers: { 
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        Authorization: `Bearer <token>`}
    })
    .then(resp => resp.json())
    .then(newProgram => dispatch({ type: 'ADD_USER_PROGRAM', payload: newProgram }))
  }
}

export const editUserProgram = (exerciseId, customProgramId) => {
  let configObj = {
    exercise_id: exerciseId
  }
  return dispatch => {
    fetch(`${baseURL}/custom_programs/${customProgramId}`, {
      method: 'PATCH',
      body: JSON.stringify(configObj),
      headers: { 
        'Content-Type': 'application/json',
        'Accepts': 'application/json',
        Authorization: `Bearer <token>`}
    })
    .then(resp => resp.json())
    .then(updatedProgram => dispatch({type: 'UPDATE_USER_PROGRAM', payload: updatedProgram}))
  }
}

