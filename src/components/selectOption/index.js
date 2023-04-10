import { SelectContainer } from "./select.style"

const OptionSelect = ({options, handleChange}) => {
  return (
    <SelectContainer
     onChange={handleChange}
     aria-label="Filter Apes">
      { options.map((item, index) => (
        <option key={index} value={item.label}>{item.label}</option>
      ))
      }
    </SelectContainer>
  )
}

export default OptionSelect;