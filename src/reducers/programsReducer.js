
const programsReducer = ( state = {programs:[], userPrograms:[], loading: false}, action ) => {
    switch (action.type) {
        case 'LOADING_PROGRAMS':
            return {
                ...state, 
                programs: [...state.programs],
                loading: true
            }
        case 'ADD_PROGRAMS':
            return {
                ...state, 
                programs: action.programs,
                loading: false
            }
        case 'ADD_USER_PROGRAM':
            return {
                ...state,
                userPrograms: [...state.userPrograms, action.payload]
            }
        default:
            return state
    }
}

export default programsReducer