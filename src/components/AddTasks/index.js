import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import TagItem from '../TagItem'

import TaskItem from '../TaskItem'

import './index.css'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

class AddTasks extends Component {
  state = {taskInput: '', activeOptionId: tagsList[0].optionId, tasksList: []}

  onChangeTaskInput = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeSelectInput = event => {
    this.setState({activeOptionId: event.target.value.toUpperCase()})
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {taskInput, activeOptionId} = this.state

    const displayTextList = tagsList.find(
      eachTag => eachTag.optionId === activeOptionId,
    )

    const newTask = {
      id: uuidv4(),
      newTaskInput: taskInput,
      activeOptionId,
      displayText: displayTextList.displayText,
    }

    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      taskInput: '',
      activeOptionId,
    }))
  }

  clickedTagBtn = id => {
    const {tasksList} = this.state
    const updatedTaskList = tasksList.filter(
      eachTask => eachTask.activeOptionId === id,
    )

    this.setState({tasksList: updatedTaskList})
  }

  renderNoTaskContainer = () => (
    <div className="no-tasks-container">
      <p className="no-tasks-description">No Tasks Added Yet</p>
    </div>
  )

  renderTasksContainer = () => {
    const {tasksList} = this.state

    const tasksListLength = tasksList.length > 0

    return (
      <div className="tags-tasks-container">
        <h1 className="tags-heading">Tags</h1>
        <ul className="tags-container">
          {tagsList.map(eachTag => (
            <TagItem
              key={eachTag.optionId}
              eachTagDetails={eachTag}
              clickedTagBtn={this.clickedTagBtn}
            />
          ))}
        </ul>
        <h1 className="tasks-heading">Tasks</h1>
        {tasksListLength ? (
          <ul className="tasks-container">
            {tasksList.map(eachTask => (
              <TaskItem key={eachTask.id} eachTaskDetails={eachTask} />
            ))}
          </ul>
        ) : (
          this.renderNoTaskContainer()
        )}
      </div>
    )
  }

  render() {
    const {taskInput} = this.state

    return (
      <div className="app-container">
        <form
          type="form"
          className="form-container"
          onSubmit={this.onSubmitForm}
        >
          <h1 className="form-heading">Create a task!</h1>
          <div className="input-container">
            <label htmlFor="task" className="label-element">
              Task
            </label>
            <input
              id="task"
              placeholder="Enter the task here"
              className="input-element"
              onChange={this.onChangeTaskInput}
              value={taskInput}
            />
          </div>
          <div className="input-container">
            <label htmlFor="tags" className="label-element">
              Tags
            </label>
            <select
              id="tags"
              className="input-element"
              onChange={this.onChangeSelectInput}
            >
              {tagsList.map(eachTag => (
                <option
                  key={eachTag.optionId}
                  className="tag-option"
                  value={eachTag.optionId}
                >
                  {eachTag.displayText}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" className="add-task-btn">
            Add Task
          </button>
        </form>
        {this.renderTasksContainer()}
      </div>
    )
  }
}

export default AddTasks
