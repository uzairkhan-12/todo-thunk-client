import { ADD_ALERT,REMOVE_ALERT } from "../actions/types";

export const setAlert = (alertMessage,alertType,timeout = 2000) => (dispatch) => {
    dispatch({
        type:ADD_ALERT,
        payload:{alertMessage,alertType}
    })
    setTimeout(() => 
    dispatch({
        type:REMOVE_ALERT,
    }),timeout)
}