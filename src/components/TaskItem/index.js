import './index.css'

const TaskItem = props => {
  const {eachTaskDetails} = props
  const {newTaskInput, displayText} = eachTaskDetails
  return (
    <li className="task-item-container">
      <p className="task-item-heading">{newTaskInput}</p>
      <p className="task-item-display-text">{displayText}</p>
    </li>
  )
}

export default TaskItem
