import React from 'react';
import styled from '@emotion/styled';
import useStore from './store';
import './App.css';

import PokemonInfo from './components/PokemoneInfo';
import PokemonFilter from './components/PokemonFilter';
import PokemonTable from './components/PokemonTable';

const Title = styled.h1`
  text-align: center;
`;
const TwoColumnLayout = styled.div`
  display: grid,
  grid-template-columns: 70% 30%,
  grid-column-gap: 1rem
`;
const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

function App() {
  const pokemon = useStore((state) => state.pokemon);
  const setPokemon = useStore((state) => state.setPokemon);

  React.useEffect(() => {
    fetch("/starting-react/pokemon.json")
      .then((response) => response.json())
      .then(setPokemon);
  }, [setPokemon]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Title>Pokemon Search</Title>
      <TwoColumnLayout> 
        <div>
          <PokemonFilter />
          <PokemonTable  />
        </div>
        <PokemonInfo />
      </TwoColumnLayout>
    </Container>
  );
}

export default App;
