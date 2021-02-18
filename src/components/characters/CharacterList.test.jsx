import React from 'react';
import { render } from '@testing-library/react';
import CharacterList from './CharacterList';
import { MemoryRouter } from 'react-router-dom';

describe('displays an character', () => {
  it('renders one single character', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CharacterList 
          characters={[]} 
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
