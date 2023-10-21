import styled from "styled-components";
import Character from "./Character";

const Frase = styled.div`
  display: flex;
`;

const ContieneBoton = styled.div`
  width: 100%;
  text-align: center;
`;

const Boton = styled.button`
  width: 250px;
  background-color: #e76f51;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 20px;
  font-size: 18px;
  margin-top: 40px;
  transition: all 0.2s ease-out;
  &:hover{
    cursor: pointer;
    background-color:#1c0950;
  }
`;

export default function CharacterContainer(props) {
  const { Charaters, reqApi } = props;

  return (
    <>
      <Frase>
        {Charaters.map((character, index) => (
          <Character dataCharacter={character} key={index} />
        ))}
      </Frase>
      <ContieneBoton>
        <Boton onClick={reqApi}>Mas Frases</Boton>
      </ContieneBoton>
    </>
  );
}

