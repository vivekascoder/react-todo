import { useState } from 'react';

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  function addNewTodo(e) {
    e.preventDefault();
    if (newTodo) {
      setTodos((todos) => [
        ...todos, { value: newTodo, isCompleted: false, id: Date.now() }
      ]);
      console.log(todos)
    }
  }
  function deleteTodo(todo) {
    let filteredTodos = todos.filter((el) => {
      console.log('Todo: ', el)
      return el !== todo;
    })
    setTodos(filteredTodos)
  }
  function toggleTodo(todo) {
    let filteredTodos = todos.filter((el) => {
      if (el === todo) {el.isCompleted = !el.isCompleted}
      return true;
    })
    setTodos(filteredTodos)
    // console.log('Before: ', todo)
    // let currentTodo = todos.find((e) => e === todo);
    // currentTodo.isCompleted = !currentTodo.isCompleted;
    // console.log('After: ', todo)
  }

  return (
    <div className="wrapper">
      <div className="heading">
        <h1>🗒️ TODO</h1>
      </div>
      <div className="content">
        <form className="content-form" onSubmit={addNewTodo}>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => { setNewTodo(e.target.value) }}
          />
          <button type="submit">➕ Add</button>
        </form>
        <div className="todos-wrapper">
          <ul>
            {
              todos.map((t) => {
                return (
                  <li key={t.id}>
                    <span style={{textDecoration: t.isCompleted ? 'line-through' : 'none'}} onClick={() => {toggleTodo(t)}}>
                      {t.value}
                    </span>
                    <button onClick={() => {deleteTodo(t)}}>❌</button>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;