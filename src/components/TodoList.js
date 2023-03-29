import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos,getEditTodo, deleteTodo, updateStatus } from '../redux/actions/todo'

const TodoList = () => {
  const dispatch = useDispatch()
  const todos = useSelector(state => state.todo.todos)

  console.log(todos)
  useEffect(() => {
    dispatch(getTodos())
  },[])

  function getTodoItem(id){
    const todo = todos.find(x => x._id === id)

    dispatch(getEditTodo(todo))
  }
  function deleteTodoItem(id){
    dispatch(deleteTodo(id))
  }
  function markCompleted(id){
    const todo = todos.find(x => x._id === id)
    dispatch(updateStatus(todo))
  }
  return (
    <div className='mx-auto mt-5' style={{width:800}}>
      <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Todo</th>
      <th scope="col">Mark completed</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {todos.map(todo => {
      return(
      <tr key={todo._id}>
      <th scope="row">1</th>
      <td>{todo.todo}</td>
      <td><input onClick={() => markCompleted(todo._id)} defaultChecked={todo.isCompleted} type='checkbox'/></td>
      <td><button onClick={() => getTodoItem(todo._id)} className='btn btn-primary'>Edit</button></td>
      <td><button onClick={() => {deleteTodoItem(todo._id)}} className='btn btn-danger'>Delete</button></td>
    </tr>
      )
    })}
    
    
  </tbody>
</table>
    </div>
  )
}

export default TodoList
