const rootReducer = ( state = {
    programs:[], 
    userPrograms:[], 
    exercises:[],
    loadingTP: false, 
    loadingUP: false,
    loadingLogIn: false,
    loggedIn: false,
    currentUser: null,
    alert: {
        message: '',
        variant: ''
    }
    }, action ) => {
    switch (action.type) {
        case 'LOADING_TRAINING_PROGRAMS':
            return {
                ...state,
                loadingTP: true
            }
        case 'FETCH_TRAINING_PROGRAMS':
            return {
                ...state,
                programs: action.programs,
                loadingTP: false
            }
        case 'LOADING_USER_PROGRAMS':
            return {
                ...state,
                loadingUP: true
            }
        case 'FETCH_USER_PROGRAMS':
            return {
                ...state,
                userPrograms: action.userPrograms,
                loadingUP: false
            }
        case 'ADD_USER_PROGRAM':
            return {
                ...state,
                userPrograms: [...state.userPrograms, action.payload],
            }
        case 'UPDATE_USER_PROGRAM':
            let userProgramIdx = state.userPrograms.findIndex(element => element.id === action.payload.user_program_id)
            let program = state.userPrograms[userProgramIdx]
            let workoutUpdateIdx = program.custom_programs.findIndex(element => element.id === action.payload.id)
            program.custom_programs = program.custom_programs.slice(0, workoutUpdateIdx).concat(action.payload).concat(program.custom_programs.slice(workoutUpdateIdx + 1))
            return {
              ...state, 
              userPrograms: state.userPrograms.slice(0, userProgramIdx).concat(program).concat(state.userPrograms.slice(userProgramIdx + 1))
            }
        case 'FETCH_EXERCISES':
            return {
                ...state,
                exercises: action.exercises
            }
        case 'LOADING_LOGIN':
            return {
                ...state,
                loadingLogIn: true
            }
        case 'CREATE_USER':
            return {
                ...state,
                loadingLogIn: false,
                currentUser: action.user,
                loggedIn: true,
                alert: {
                    message: action.message,
                    variant: action.variant
                }
            }
        case 'LOGOUT_USER':
            return {
                ...state,
                currentUser: null,
                loggedIn: false,
                alert: {
                message: action.message,
                variant: action.variant}
            }

        case 'ERROR_MESSAGE':
            return {
                ...state,
                loadingLogIn: false,
                alert: {
                message: action.message,
                variant: action.variant
            }}
        default:
            return state
    }
}

export default rootReducer