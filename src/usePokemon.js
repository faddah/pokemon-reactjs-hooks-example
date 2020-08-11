import { useState, useEffect, useCallback } from "react";

export default function usePokemon() {
  const [query, setQuery] = useState("diglett");
  const [pokemon, setPokemon] = useState(null);
  const [err, setErr] = useState(null);

  const getPokemon = useCallback(async name => {
    try {
      const res = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`
      );
      const data = await res.json();

      // console.log(this);

      setPokemon(data);
      setErr(null);
      console.log(data);
    } catch (err) {
      setPokemon(null);
      setErr(err);

      console.error(err);
    }
  }, []);

  useEffect(() => {
    getPokemon(query);
  }, [query, getPokemon]);

  return { query, setQuery, pokemon, getPokemon, err };
}
