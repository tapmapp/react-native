import { SET_LOGIN_USER } from '../actions/types';

const initialState = {
    userName: '',
    password: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_LOGIN_USER:
            return {
                ...state
            }
        default:
            return state;
    }
}
