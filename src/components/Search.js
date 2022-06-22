import React from 'react'
import { MdSearch } from 'react-icons/md'

const Search = ({ setSearchText }) => {
  return (
    <div className='search'>
        <MdSearch className='search-icon' size='1.3em' />
        <input
            onChange={e => setSearchText(e.target.value)}
            type='text'
            placeholder='Search...'
        />
    </div>
  )
}

export default Search