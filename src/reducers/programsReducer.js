
const programsReducer = ( state = {
    programs:[], 
    userPrograms:[], 
    exercises:[],
    loadingTP: false, 
    loadingUP: false
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
        default:
            return state
    }
}

export default programsReducer