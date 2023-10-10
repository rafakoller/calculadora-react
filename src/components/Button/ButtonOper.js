import { ButtonOperContainer } from "./styles";

  const ButtonOper = ({label, onClick}) => {
    return (
      <ButtonOperContainer onClick={onClick}>
        {label}
      </ButtonOperContainer>
    );
  }
  
  export default ButtonOper;