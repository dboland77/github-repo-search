export const ListItem = ({ item, onRemove }) => (
    <li>
        <a href = {item.url}>

      <span>{item.name}</span>
        </a>
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );