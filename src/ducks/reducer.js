const initialState={
    player:{},
}

export default function reducer(state,action) {
    if (!state) {return state=initialState}

    switch(action.type) {
        default:
            return state

    }
}