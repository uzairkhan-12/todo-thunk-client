import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAlert } from '../redux/actions/alert'
import { addTodo, editTodo } from '../redux/actions/todo'
import Alert from './Alert'

const AddTodo = () => {
  const [todo,setTodo] = useState()
  const todoToEdit = useSelector(state => state.todo.todo)
  const alertType = useSelector(state => state.alert.alertType)
  const dispatch = useDispatch()
  useEffect(() => {
    setTodo(todoToEdit.todo)
  },[todoToEdit])
  const handleSubmit = () => {
    if(!todo){
      dispatch(setAlert("Todo is required", "danger"))
      return
    }
    if(todoToEdit.todo){
      dispatch(editTodo(todoToEdit._id, todo))
    }
    else{
      dispatch(addTodo(todo))
      setTodo('')
    }
  }
  return (
    <>
    {alertType && <Alert />}
    <div className='mx-auto border py-5 flex items-center justify-center items-center'style={{width: 500, borderRadius:20, marginTop:30}}>

  <div className="mb-3" style={{padding:30}}>
    <label for="exampleInputPassword1" className="form-label">Todo</label>
    <input value={todo} onChange={(e) => setTodo(e.target.value)} type="text" className="form-control" id="exampleInputPassword1" />
  <button onClick={handleSubmit} type="submit" className="btn btn-primary mt-3 float-end">Submit</button>
  </div>

    </div>
    </>
  )
}

export default AddTodo
