import reducers from ".";
import { ADD_ALERT,REMOVE_ALERT } from "../actions/types";

const initialState = {
    alertMessage:'',
    alertType:''
}

function alertReducer(state = initialState,action){
    const {type,payload} = action
    switch(type){
        case ADD_ALERT:
            return{
                ...payload
            }
        case REMOVE_ALERT:
            return{
                ...initialState
            }
        default:
            return state
    }
}

export default alertReducer