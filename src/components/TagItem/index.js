import './index.css'

const TagItem = props => {
  const {eachTagDetails, clickedTagBtn} = props
  const {displayText, optionId} = eachTagDetails

  const onClickTagButton = () => {
    clickedTagBtn(optionId)
  }

  return (
    <li className="tag-item-container">
      <p className="tag-button" onClick={onClickTagButton}>
        {displayText}
      </p>
    </li>
  )
}

export default TagItem
