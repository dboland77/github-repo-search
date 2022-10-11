export const SearchHistoryItem = ({ item, onRemove }) => (
    <li>
      <span>{item}</span>
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );