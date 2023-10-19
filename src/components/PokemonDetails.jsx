import { usePokemons } from "../context/PokemonContext";
import Item from "./Item";

const PokemonDetails = ({ pokemon }) => {
  return (
    <section className="pokemon_details">
      <div className="pokemon_details__container">
        <Item title="No" description={pokemon["number"]} />
        <Item title="Level" description={pokemon["level"]} />
        <Item title="Type" description={pokemon["category"]} />
        <Item title="Hability" description={pokemon["hability"]} />
        <Item title="Height" description={pokemon["height"]} />
        <Item title="Weight" description={pokemon["weight"]} />
      </div>
    </section>
  );
};

export default PokemonDetails;
