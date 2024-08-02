import './index.css'

const TaskItem = props => {
  const {eachTaskDetails} = props
  const {newTaskInput, displayText} = eachTaskDetails
  return (
    <li className="task-item-container">
      <p className="task-item-heading">{newTaskInput}</p>
      <button type="button" className="task-item-display-text">
        {displayText}
      </button>
    </li>
  )
}

export default TaskItem
