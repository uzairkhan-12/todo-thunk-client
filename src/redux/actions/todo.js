import { GET_TODOS,ADD_TODO,GET_EDIT_TODO, DELETE_TODO, EDIT_TODO } from "../actions/types";
import { setAlert } from "./alert";

export const getTodos = () => async (dispatch) => {
  
    try {
      const res = await fetch('http://localhost:5000/get-todos')
      const data = await res.json()
      dispatch({
        type: GET_TODOS,
        payload: data,
      });
    } catch (err) {
        console.log(err)
    //   dispatch({
    //     type: POST_ERROR,
    //     // payload: { msg: err.response.statusText, status: err.response.status },
    //     payload: { msg: "something went wrong" },
    //   });
    //   dispatch(setAlert("something went wrong", "danger"));
    }
  };

export const addTodo = (todo) => async (dispatch) => {
  console.log(todo)
  try{
    const res = await fetch('http://localhost:5000/add-todos',{
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({todo, isCompleted:false})
    })
    const data = await res.json()
    dispatch({
      type:ADD_TODO,
      payload:data
    })
    dispatch(setAlert("Todo added", "success"))
  }catch(err) {
    dispatch(setAlert('Something went wrong, please check it should be you have already this todo in table', 'danger'))
  }
}


export const getEditTodo = (todo) => (dispatch) => {
  dispatch({
    type:GET_EDIT_TODO,
    payload:todo
  })
}

export const deleteTodo = (id) => async(dispatch) => {
  console.log(id)
  try{
    const res = await fetch(`http://localhost:5000/delete-todo/${id}`, {
      method:"DELETE",
    })
    if(res.statusText === "OK"){
      dispatch({
        type:DELETE_TODO,
        payload:id
      })
      dispatch(setAlert("Todo Deleted successully", "success"))
    }else{
      dispatch(setAlert("Something went wrong", "danger"))
    }
  }
  catch(err){

  }
}

export const editTodo = (id, todo) => async(dispatch) => {
  try{
    const res = await fetch(`http://localhost:5000/edit-todo/${id}`,{
      method:'PATCH',
      headers:{
        "Content-Type":"Application/json"
      },
      body:JSON.stringify({todo})
    })
    const data = await res.json()
    dispatch({
      type:EDIT_TODO,
      payload:data
    })
  }
  catch(err){
    dispatch(setAlert(err,'danger'))
  }
}


export const updateStatus = (todo) => async(dispatch) => {
  try{
    const res = await fetch(`http://localhost:5000/update-status/${todo._id}`,{
      method:'PATCH',
      headers:{
        "Content-Type":"Application/json"
      },
      body:JSON.stringify({isCompleted:!todo.isCompleted})
    })
    const data = await res.json()
    console.log(data)
  }
  catch(err){
    dispatch(setAlert(err,"danger"))
  }
}