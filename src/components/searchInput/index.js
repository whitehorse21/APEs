
import { SearchContainer, SearchWrap } from "./search.style"

const SearchElement = ({children, placeholder, position, handleChange, handleKeyPress}) => {
  return (
    <SearchWrap>
      <SearchContainer
      type="number"
      min={0} 
      max={10000} 
      placeholder={`${placeholder}...`}
      aria-label="Search"
      position={position}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      />
      {children}
    </SearchWrap>
  )
}

export default SearchElement;