import React from 'react'
import {ListItem} from "../ListItem"

export const SearchHistory = ({searchHistory = [], onRemove}) => 
    <>
    <h2> Search History (last 10)</h2>
        <ol>
        {searchHistory.map((item, index) => {
            return(
                <ListItem listNumber = {index} item={item} onRemove={onRemove} />
                )})}
      </ol>
                </>
 
            

