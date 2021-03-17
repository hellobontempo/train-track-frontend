
const programsReducer = ( state = {programs:[], loading: false}, action ) => {
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
    
        default:
            return state
    }
}

export default programsReducer