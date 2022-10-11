import React from 'react'
import { SearchHistoryItem } from './SearchHistoryItem'

export const SearchHistory = ({searchHistory = [], onRemove}) => {
return(
    <>
    <h2> Search History (last 10)</h2>
        <ol>
        {searchHistory.map((item, index) => {
            return(
                <SearchHistoryItem key = {index} item={item} onRemove={onRemove} />
                )})}
      </ol>
                </>
)}
            

