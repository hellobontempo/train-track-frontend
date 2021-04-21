const baseURL = 'http://localhost:3000'
// const baseURL = 'https://afternoon-tundra-58524.herokuapp.com'

export const newUser = userData => {
  return (dispatch)=>{
    dispatch({ type: 'LOADING_LOGIN' })  
    fetch(`${baseURL}/signup`, {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'}
      })  
    .then( r => r.json())
    .then( user => {
      if ( !!user.error ){
        dispatch({ type: 'ERROR_MESSAGE', message: user.error, variant: 'danger' })
      } else {
        localStorage.setItem('accessToken', user.jwt)
        dispatch({ type: 'CREATE_USER', message: user.message, user: user.user, variant: 'success' })
      }
    })
  }
}

export const login = userData => {
  return (dispatch) =>{
    dispatch({ type: 'LOADING_LOGIN' }) 
    fetch(`${baseURL}/login`, {
      method: 'POST',
      body: JSON.stringify(userData),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
    .then(resp => resp.json())
    .then (data => {
      console.log(data)
      if ( !!data.error ){
        dispatch({ type: 'ERROR_MESSAGE', message: data.error, variant: 'danger'})
      }else{
      localStorage.setItem('token', data.jwt)
      dispatch({type: 'CREATE_USER', message: data.message, user: data.user, variant: 'success'})
    }})
  }
}

export const fetchPrograms = (jwt) => {
  const configObj = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${ jwt }`
    }
}
  return (dispatch) => {
    dispatch({ type: 'LOADING_TRAINING_PROGRAMS' });
    fetch(`${baseURL}/programs`, configObj)
      .then(response => response.json())
      .then(programs => dispatch({ type: 'FETCH_TRAINING_PROGRAMS', programs }));
  };
} 

export const fetchUserPrograms = (jwt) => {
  const configObj = {
    method: 'GET',
    headers: {
        'Authorization': `Bearer ${ jwt }`
    }
}
  return (dispatch) => {
    dispatch({ type: 'LOADING_USER_PROGRAMS' });
    fetch(`${baseURL}/user_programs`, configObj)
      .then(response => response.json())
      .then(userPrograms => dispatch({ type: 'FETCH_USER_PROGRAMS', userPrograms }));
  };
} 
export const fetchExercises = (jwt) => {
  return (dispatch) => {
    fetch(`${baseURL}/exercises`)
      .then(response => response.json())
      .then(exercises => dispatch({ type: 'FETCH_EXERCISES', exercises }));
  };
} 

export const addUserProgram = (newProgram) => {
  const jwt = localStorage.token
  const configObj = {
    method: 'POST',
    body: JSON.stringify(newProgram),
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: `Bearer ${ jwt }`}
  } 
  return dispatch => {
    fetch(`${baseURL}/user_programs`, configObj)
    .then(resp => resp.json())
    .then(programData => {
      !!programData.message ? dispatch({ type: 'ERROR_MESSAGE', message: programData.message, variant: 'secondary' }) : dispatch({ type: 'ADD_USER_PROGRAM', payload: programData })
    })
  }
}

export const editUserProgram = (exerciseId, customProgramId, jwt) => {
  const exercise = {
    exercise_id: exerciseId
  }
  const configObj = {
    method: 'PATCH',
    body: JSON.stringify(exercise),
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      Authorization: `Bearer ${ jwt }`}
  }
  return dispatch => {
    fetch(`${baseURL}/custom_programs/${customProgramId}`, configObj)
    .then(resp => resp.json())
    .then(updatedProgram => dispatch({type: 'UPDATE_USER_PROGRAM', payload: updatedProgram}))
  }
}

