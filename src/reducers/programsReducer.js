
const programsReducer = ( state = {
    programs:[], 
    userPrograms:[], 
    exericses:[],
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