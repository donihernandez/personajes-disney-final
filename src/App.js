import { useEffect, useState } from "react";
import CharacterList from "./components/CharacterList/CharacterList";
import Hero from "./components/Hero/Hero";

function App() {
  const [characters, setCharacters] = useState();

  const getCharacters = async () => {
    const response = await fetch("https://api.disneyapi.dev/characters");
    const data = await response.json();
    setCharacters(data.data);
  };

  useEffect(() => {
    getCharacters();
  }, []);

  console.log(characters);

  return (
    <>
      <Hero />
      <CharacterList characters={characters} />
    </>
  );
}

export default App;
