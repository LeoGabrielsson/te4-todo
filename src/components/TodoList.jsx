import TodoItem from './TodoItem'
import { useEffect, useState } from 'react'


function TodoList() {
    const [todos, setTodos] = useState(() => {
        return JSON.parse(localStorage.getItem('todos')) || []
    })


    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const addTodo = () => {
        const newTodo = document.getElementById('newTodo').value
        if (newTodo === '') return
        const newTodos = [...todos, { id: todos.length + 1, lable: newTodo, completed: false }]
        setTodos(newTodos)
    }
    const toggleTaskCompleted = (id) => {}

    return (
        <ul className='Todo-List'>
            {todos.map((todo, index) =>
                <TodoItem
                    key={index}
                    id={todo.id}
                    lable={todo.lable}
                    done={todo.completed}
                    toggleTaskCompleted={toggleTaskCompleted} />
            )}
        </ul>
    )
}

export default TodoList