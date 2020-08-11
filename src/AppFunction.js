import React from "react";
import usePokemon from "./usePokemon";
import "./styles.css";

export default function AppFunction() {
  const { query, setQuery, pokemon, getPokemon, err } = usePokemon();

  const handleSubmit = e => {
    e.preventDefault();
    getPokemon(query);
  };

  const handleChange = e => {
    console.log(`hiiiiii! ${e.target.value}`);
    setQuery(e.target.value);
  };

  return (
    <div className="main-div">
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleChange} />
        <input type="submit" value="Search" />
      </form>
      <div className="hello-class-div">hellooooo pure functions!</div>

      {pokemon && !err ? (
        <div>
          <img
            src={`https://pokeres.bastionbot.org/images/pokemon/${
              pokemon.id
            }.png`}
            alt={pokemon.name}
          />
          <h2 className="pokemon-name-title">{pokemon.name}</h2>
        </div>
      ) : (
        <div>
          <img
            className="img-error"
            src={require(`./funny-404-error-alien-meteor-graphic.jpg`)}
            alt={err}
          />
          <h2>Whoops! Couldn't find that Pokemon!</h2>
          <p>
            Perhaps you mis-typed or put in a few wrong characters? Try again?
          </p>
        </div>
      )}
    </div>
  );
}
