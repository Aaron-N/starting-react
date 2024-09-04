import React from 'react';
import styled from '@emotion/styled';
import PokemonContext from '../PokemonContext';

const Input = styled.input`
  width: 100%;
  font-size: x-large;
  padding: 0.2rem;
`;

const PokemonFilter = () => {
  const {filter, setFilter} = React.useContext(PokemonContext);
  return (
    <Input 
    value={(filter)}
    onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default PokemonFilter