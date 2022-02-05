// Searchbar.js
import { useContext } from 'react'
import { SearchContext } from '../context/SearchContext'

const SearchBar = () => {
    const {term, handleSearch} = useContext(SearchContext)

    return (
        <form>
            <input ref={term} type="text" placeholder="Search Here" />
            <button onClick={(e) => handleSearch(e, term.current.value)}>Submit</button>
            <button type="reset" value="Reset">Reset</button>
        </form>
    )
}

export default SearchBar
