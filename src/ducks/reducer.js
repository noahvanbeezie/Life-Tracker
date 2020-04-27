const initialState={
    player:{},
}

const GET_USER = 'GET_USER'

export function getUser(userObj){
    return{
        type:GET_USER,
        payload:userObj
    }

}

export default function reducer(state,action) {
    if (!state) {return state=initialState}

    switch(action.type) {
        
        default:
            return state

    }
}