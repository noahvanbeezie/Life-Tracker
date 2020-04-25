const initialState={
    player:{},
}

export default function authReducer(state,action) {
    if (!state) {return state=initialState}

    switch(action.type) {
        default:
            return state

    }
}