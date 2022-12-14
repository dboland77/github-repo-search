export const RepoListItem = ({ item, onRemove }) => (
    <li>
        <a href = {item.html_url}>

      <span>{item.name}</span>
        </a>
      <button type="button" onClick={() => onRemove(item.id)}>
        Remove
      </button>
    </li>
  );