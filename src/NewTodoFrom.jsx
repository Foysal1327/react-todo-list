import { useState } from 'react'

export function NewTodoform({onSubmit}){
    
    const [newItem, setnewItem] = useState("")
    function handleSubmit(e) {
        e.preventDefault()
        if(newItem === "") return
        onSubmit(newItem)
        setnewItem("")
      }
    return (
        <form className='new-item-form' onSubmit={handleSubmit}>
    <div className='form-row'>
      <label htmlFor='item'>
          New Item 
      </label>
      <input 
        value={newItem}
        onChange={e=> setnewItem(e.target.value)}
        type="text" 
        id="item"
      />
    </div>
    <button className='btn'> Add </button>
    </form>
    )
}