import axios from 'axios'

export const fetchMember  = () => {
    return (dispatch) => {
        axios.get('https://reqres.in/api/users?page=2')
            .then(response => {
                const members = response.data
                console.log(members)
                /*dispatch({
                    type : 'ADD_MEMBERS',
                    payload : {
                        members : members.data
                    }
                })*/
            })
    }
}

export const fetchEvent  = () => {
    return (dispatch) => {
        axios.get('https://swapi.co/api/films/')
            .then(response => {
                const events = response.data
                dispatch({
                    type : 'ADD_EVENTS',
                    payload : {
                        events : events.results
                    }
                })
            })
    }
}
