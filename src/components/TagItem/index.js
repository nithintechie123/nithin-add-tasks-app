import './index.css'

const TagItem = props => {
  const {eachTagDetails, clickedTagBtn} = props
  const {displayText, optionId} = eachTagDetails

  const onClickTagButton = () => {
    clickedTagBtn(optionId)
  }

  return (
    <li className="tag-item-container">
      <button type="button" className="tag-button" onClick={onClickTagButton}>
        {displayText}
      </button>
    </li>
  )
}

export default TagItem
