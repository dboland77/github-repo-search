import React from 'react'
import {ListItem} from "../ListItem"

export const RepoList = ({repolist = [], onRemove}) => {
  return (
    <>
    <h2> Search results in descending star count order </h2>
        <ol>
        {repolist.map((item) => (
          <ListItem key={item.id} item={item} onRemove={onRemove} />
          ))}
      </ol>
          </>
      );
}


