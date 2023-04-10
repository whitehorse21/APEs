import { GridContainer } from "./grid.style"
import { BsGrid3X3GapFill } from 'react-icons/bs';
import { RiLayoutGridFill } from 'react-icons/ri';

const GridOption = () => {
  return (
    <GridContainer>
      <div className='grid-item one'>
        <RiLayoutGridFill />
      </div>
      <div className='grid-item'>
        <BsGrid3X3GapFill />
      </div>
    </GridContainer>
  )
}

export default GridOption;