import { useState } from "react";
import { Form } from "react-bootstrap"
import SearchElement from "../searchInput"

const DisplayFilterOption = ({option, selValues, handleChange}) => {
  const [show, setShow] = useState(false);
  const { title, options } = option;

  const [filteredOption, setFilteredOption] = useState(options);

  const handleSearch = (e) => {
    const search = e.target.value;
    const filtered = options.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
    setFilteredOption(filtered);
  }

  const handleCheck = (e) => {
    handleChange(e.target.value);
  }

  return (
    <>
      <div className='mb-2 d-flex justify-content-between'>
        <h4 className='categoryTitle'>{title}</h4>
        <span
         onClick={() => setShow(!show)}
         style={{ cursor: "pointer" }}
         className='openBtn'>{show ? '-' : '+'}</span>
      </div>
      <div className={`mb-5 options-area ${show ? "" : "d-none"}`}>
        <div className="checkContainer">
        { filteredOption.map((item, index) => (
          <Form.Check type="checkbox" 
          onClick={handleCheck}
          value={`${title},${item.name}`}
          checked={selValues.includes(`${title},${item.name}`) ? true : false}
          onChange={e => {}}          
          label={`${item.name} (${item.value})`} key={index} />
        ))}
      </div>

      {/*
        <SearchElement placeholder="Search here" value="" handleChange={handleSearch}>
            <div className="checkContainer mt-4">
              { filteredOption.map((item, index) => (
                <Form.Check type="checkbox" 
                onClick={handleCheck}
                value={`${title},${item.name}`}
                label={`${item.name} (${item.value})`} key={index} />
              ))}
            </div>
        </SearchElement>
              */}
      </div>
    </>
  )
}

export default DisplayFilterOption;