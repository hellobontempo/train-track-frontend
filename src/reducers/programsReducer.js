
const programsReducer = ( state = {programs:[], userPrograms:[], loading: false}, action ) => {
    switch (action.type) {
        case 'LOADING_PROGRAMS':
            return {
                ...state,
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
                userPrograms: action.userPrograms
            }
        default:
            return state
    }
}

export default programsReducer