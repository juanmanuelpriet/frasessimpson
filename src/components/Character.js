import styled from "styled-components";

const ContentCharacter = styled.div`
  padding: 20px;
  border: 1px solid #2a9d8f;
  border-radius: 20px;
  width: 300px;
  text-align: center;
  margin: 10px;
  &:hover {
    filter: brightness(40%);
  }
`;
const Title = styled.h2`
    color : #264653;
    height: 40px;
    justify-content:center;
    align-items:center;
    display:flex;
`;
const ImageContainer=styled.div`
    height:250px;
    display:flex;
    align-items: center;
    justify-content:center;
`;

export default function Character(props) {
  const { dataCharacter } = props;
  const { character, image, quote } = dataCharacter;
  return (
    <ContentCharacter>
      <Title>{character}</Title>
      <ImageContainer>
        <img src={image} alt={character} width="130px" height= "auto" />
      </ImageContainer>      
      <Phrase>{quote}</Phrase>
    </ContentCharacter>
  );
}
const Phrase = styled.h3`
    color: #2a9d8f;
    height:100px;
`;