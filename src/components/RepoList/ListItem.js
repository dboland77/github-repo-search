export const ListItem = ({ item, onRemove }) => (
    <li>
      <span>{item.name}</span>
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );