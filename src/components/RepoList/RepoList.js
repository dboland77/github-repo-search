import React from 'react'
import {RepoListItem} from "./RepoListItem"

export const RepoList = ({repolist = [], onRemove}) => {
  return (
    <>
    <h2> Search results in descending star count order </h2>
        <ol>
        {repolist.map((item) => (
          <RepoListItem key={item.id} item={item} onRemove={onRemove} />
          ))}
      </ol>
          </>
      );
}


