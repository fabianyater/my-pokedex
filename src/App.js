import './App.css';
import PokemonDetails from './components/PokemonDetails';
import { usePokemons } from './context/PokemonContext';
import { pokeball } from './img/images';
import { pokemons } from './utils';


function App() {
  const { index, setIndex } = usePokemons()
  const pokemon = pokemons[index]

  if (!pokemon) {
    console.error("Invalid pokemon index:", index);
    return null; // or render an error message or a loading state
  }


  return (
    <>
      <header className="header">
        <img className="header__logo" src={pokeball} alt="Pokeball" />
        <h1 className="header__title">Pokédex_</h1>
      </header>

      <main className="main">
        <div className="main__wrapper">
          <section className="pokemon-profile">
            <div className="pokemon-profile__title">
              <h2>{pokemon.name}</h2>
            </div>
            <img src={pokemon.image} alt={pokemon.name} title={pokemon.name} />
          </section>
          <PokemonDetails pokemon={pokemon} />
        </div>
      </main>

      <footer className="footer">
        <div className="footer__container">
          <section className="footer__title">
            <h2>OTHERS</h2>
          </section>
          <ul className="footer__list">
            {pokemons.map((pokemon) => (
              <li key={pokemon.index} className="footer__item">
                <button className={`button ${index === pokemon.index ? 'active' : ''}`} onClick={() => setIndex(pokemon.index)}>
                  <img className="button__image" src={pokemon.image} alt={pokemon.name} title={pokemon.name} />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
