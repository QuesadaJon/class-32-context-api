import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';
import { MemoryRouter } from 'react-router-dom';

describe('displays an character', () => {
  it('renders one single character', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Character 
          name="name" 
          image="image" 
        />
      </MemoryRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
