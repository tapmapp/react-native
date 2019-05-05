import { SET_LOGIN_USER } from'./types';

export const setLoginUser = user => dispatch => {
    dispatch({
        type: SET_LOGIN_USER,
        payload: user
    })
}