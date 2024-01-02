import './index.css'

const HistoryItem = props => {
  const {id, timeAccessed, logoUrl, title, domainUrl, deleteHistory} = props

  const onDelete = () => {
    deleteHistory(id)
  }
  return (
    <li className="body-container">
      <div className="contents">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logoUrl" />
        <p className="title">{title}</p>
        <p className="url">{domainUrl}</p>
      </div>
      <button
        onClick={onDelete}
        data-testid="delete"
        type="button"
        className="button"
      >
        <img
          className="btn-img"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default HistoryItem
