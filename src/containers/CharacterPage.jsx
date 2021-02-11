import React, { useEffect, useState } from 'react';
import CharacterList from '../components/characters/CharacterList';
import { getCharacters } from '../services/lastAirbenderApi';

const CharacterPage = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharcters] = useState([]);

  useEffect(() => {
    getCharacters().then((characters) => {
      setCharcters(characters);
      setLoading(false);
    });
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return <CharacterList characters={characters} />;
};

export default CharacterPage;
