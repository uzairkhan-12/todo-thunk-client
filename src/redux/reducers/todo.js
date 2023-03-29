import { GET_TODOS, ADD_TODO, GET_EDIT_TODO, DELETE_TODO, EDIT_TODO } from "../actions/types";

const initialState = {
    todos: [],
    todo: { todo: '' },
    indexOfGivenItem: null
};

function todoReducer(state = initialState, action) {
    const { type, payload } = action
    console.log(payload)
    switch (type) {
        case GET_TODOS:
            return {
                ...state,
                todos: payload
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, payload]
            }
        case GET_EDIT_TODO:
            return {
                ...state,
                todo: payload
            }
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map((todo) => {
                    if (todo._id === payload._id) {
                        return payload
                    } else {
                        return todo
                    }
                }),
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo._id !== payload)
            }
        
        default:
            return state;
    }
}
export default todoReducer
