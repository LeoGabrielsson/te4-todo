function TodoItem(props) {
    let { id, completed, lable } = props


    return (
        <li>
            <label>{lable}</label>
            <input
                checked={completed}
                onChange={() => {
                    props.toggleTaskCompleted(id)
                }}
                type="checkbox"
            />
        </li>
    )

}

export default TodoItem