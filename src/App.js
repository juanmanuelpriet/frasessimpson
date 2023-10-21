import { useState } from "react";
import CharacterContiner from "./components/CharacterContiner";
import Container from "./components/Container";
import Header from "./components/Header";
import Welcome from "./components/Welcome";


function App() {
  const [Charaters,setCharacters]=useState(null);
  const reqApi =async ()=>{
    const Api= await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=3 ");
    const frase =await Api.json();
    setCharacters(frase);
      }

  
  return (
    <Container>
      <Header/>
      {!Charaters ? (
        <Welcome reqApi={reqApi}/>
      ):(
        <CharacterContiner Charaters={Charaters}  reqApi={reqApi}/>
      )}
      
     
    </Container>
    
  );
}

export default App;
