import { useEffect, useState } from 'react'
import { NewTodoform } from './NewTodoFrom'
import './style.css'
import { TodoList } from './TodoList'
export default function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")

    if (localValue == null) return []
    
    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  },
  [todos]
  )

  function toggleTodo(id, completed) { 
    setTodos( currentTodos => {
      return currentTodos.map(todo => {
          if (todo.id === id) {
            return {...todo, completed}
          }
          return todo
        })
    })
    
}
function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
}
  function addTodo(title){
    setTodos((currentTodos)=>{
          return [
            ...currentTodos,
            {
              id: crypto.randomUUID(), 
              title: title, 
              completed: false
            }
          ]
        })
  }
  
  return (
    <>
    <NewTodoform onSubmit={addTodo}/>
    <h1 className='header'>To-Do List</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}/>
    {/* <ul className='list'>
      {todos.length === 0 && "No To-Do"}
      {todos.map(todo => {
        console.log(todo)
          return ( 
          <li key={todo.id}>
          <label>
              <input type="checkbox" 
              checked={todo.completed}
            //   onChange={e => toggleTodo(todo.id, e.target.checked)}
              /> 
              {todo.title}
          </label>
          <button className='btn btn-danger' 
        //   onClick={() => deleteTodo(todo.id)}
          >Delete</button>
        </li>
          )
      })}
    
    </ul> */}
    </>
)
}
