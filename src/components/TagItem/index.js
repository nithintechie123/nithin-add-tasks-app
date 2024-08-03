import './index.css'

const TagItem = props => {
  const {eachTagDetails, clickedTagItem} = props
  const {displayText, optionId} = eachTagDetails

  const onClickTagItem = () => {
    clickedTagItem(optionId)
  }

  return (
    <li className="tag-item-container">
      <button type="button" className="tag-btn" onClick={onClickTagItem}>
        <p className="display-text">{displayText}</p>
      </button>
    </li>
  )
}

export default TagItem
