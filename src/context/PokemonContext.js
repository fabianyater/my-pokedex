import { createContext, useContext, useState } from 'react';

const PokemonsContext = createContext();

export function usePokemons() {
  return useContext(PokemonsContext);
}

export function PokemonProvider({ children }) {
  const [index, setIndex] = useState(0)
  const value = { index, setIndex }

  return <PokemonsContext.Provider value={value}>
    {children}
  </PokemonsContext.Provider>;
}