import styled from "styled-components";
import logo from "../the-simpson.png";
const Logoimage = styled.img`
  width: 450px;
  height: auto;
  &:hover{
    cursor: pointer;
  }
`;
const Contelogo = styled.div`
  width: 100%;
  text-align:center;
`;
const Welcometext= styled.p`
  color: #2a9d8f;
  text-align : center;
  font-weight:900;
  padding: 50px 0 10px;
  font-size:25px;
`;
export default function Welcome(props) {
    const {reqApi}=props;
    return(
    <Contelogo>
        <Welcometext>Hola, para iniciar toca la imagen</Welcometext>
        <Logoimage src={logo} alt="logo" onClick={reqApi}/>
      </Contelogo>)
};
