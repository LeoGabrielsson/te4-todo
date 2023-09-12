function Todoitem(props) {
    let { id, done, lable } = props


    return (
        <li>
            <label>{lable}</label>
            <input
                checked={done}
                onChange={() => {
                    props.toggleTaskCompleted(id)
                }}
                type="checkbox"
            />
        </li>
    )

}

export default Todoitem