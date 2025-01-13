import { StyledButton } from "./styles/Button.styled";

type Props = {
    text: string
}

const Button = (props: Props) => {
  return (
    <StyledButton>{props.text}</StyledButton>
  )
}
export default Button