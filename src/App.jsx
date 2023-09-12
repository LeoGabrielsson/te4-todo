import './App.css'
import Todoitem from './components/Todoitem'

function App() {
  const todos = [
    { id:0, lable: 'Kaffe', done: false },
    { id:1, lable: 'Kaka', done: false },
  ]

  const toggleTaskCompleted = (index) => {
    console.log(index)
  }

  return (
    <div className="container">
      <h1>Vill du göra sak?</h1>
      <ul>
        {todos.map((todo, index) =>
          <Todoitem
            key={index}
            id={todo.id}
            lable={todo.lable}
            done={todo.done}
            toggleTaskCompleted={toggleTaskCompleted} />
        )}
      </ul>
    </div>
  )
}

export default App
