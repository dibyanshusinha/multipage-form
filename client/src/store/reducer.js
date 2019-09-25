const initialState = {
    users: []
}

const reducer = (state = initialState, action) =>{

    if(action.type === 'REGISTER'){
        state.users.push(action.payload);
        return {users: state.users}; 
    }

    return state;
}

export default reducer;