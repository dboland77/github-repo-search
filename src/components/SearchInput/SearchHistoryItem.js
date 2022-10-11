export const SearchHistoryItem = ({ item, onRemove }) => {
  return (
    <li>
      <span>{item}</span>
      <button type="button" onClick={() => onRemove(item)}>
        Remove
      </button>
    </li>
  )
}