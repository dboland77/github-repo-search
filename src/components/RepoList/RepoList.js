import React from 'react'
import {ListItem} from "./ListItem"

export const RepoList = ({repolist = [], onRemove}) => {
  return (
        <ul>
        {repolist.map((item) => (
          <ListItem key={item.id} item={item} onRemove={onRemove} />
        ))}
      </ul>
      );
}


