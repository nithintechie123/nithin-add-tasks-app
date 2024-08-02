import './index.css'

const TagItem = props => {
  const {eachTagDetails, clickedTagBtn, isActive} = props
  const {displayText, optionId} = eachTagDetails

  const activeTagBtnClassName = isActive ? 'active-tag-btn' : 'tag-btn'

  const onClickTagButton = () => {
    clickedTagBtn(optionId)
  }

  return (
    <li className="tag-item-container">
      <button
        type="button"
        className={activeTagBtnClassName}
        onClick={onClickTagButton}
      >
        <p className="display-text">{displayText}</p>
      </button>
    </li>
  )
}

export default TagItem
