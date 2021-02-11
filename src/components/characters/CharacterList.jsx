import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  const characterElements = characters.map((character) => (
    <li key={character._id}>
      <Character
        name={character.name}
        image={character.photoUrl}
      />
    </li>
  ));
  return <ul data-testid="monsters">{characterElements}</ul>;
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    photoUrl: PropTypes.string.isRequired
  })
  ).isRequired
};

export default CharacterList;
