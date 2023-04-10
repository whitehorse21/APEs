import { CustomButton } from "./btn.style"

const ApeBtn = ({title, active, handleClick}) => {
  return (
    <CustomButton
      onClick={handleClick}
      active={active && 'active'}>
      {title}
    </CustomButton>
  )
}

export default ApeBtn;