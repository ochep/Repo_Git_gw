const intialState = {
    userData: [],
    userTotal: 0,
    myEvents : [],
}

const memberReducer = (state = intialState, action) => {
    switch (action.type) {
        case 'ADD_MEMBERS' :
            return {
                ...state,
                userData : action.payload.members,
            }
            
        case 'ADD_EVENTS' :
            return {
                ...state,
                myEvents : action.payload.events,
            }

        default:
            return state
    }
}



export default memberReducer