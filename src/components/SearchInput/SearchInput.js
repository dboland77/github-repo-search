import React from 'react'

export const SearchInput= ({searchTerm, onChange}) => {
  return (
    <input value={searchTerm} onChange={onChange} type='text' aria-label='Search box' role='search box'/>
  )
}
