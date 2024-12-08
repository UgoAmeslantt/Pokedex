import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PokemonDetailCard from "./PokemonDetailCard/PokemonDetailCard";
import Loader from "../PokemonList/LoadingUI/LoadingUI";
import PokemonDetailCardStat from "./PokemonDetailCard/PokemonDetailCardStat/PokemonDetailCardStat";
const PokemonDetail = () => {
    const { name } = useParams();
    const [pokemonData, setPokemonData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPokemonData = async () => {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
                if (!response.ok) {
                    throw new Error("Failed to fetch Pokémon data");
                }
                const data = await response.json();
                setPokemonData(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPokemonData();
    }, [name]);

    if (loading) {
        return <div><Loader></Loader></div>
    }

    if (error) {
        return <h2>{error}</h2>;
    }

    if (!pokemonData) {
        return <h2>No Pokémon data available.</h2>;
    }

    return (
            <PokemonDetailCard pokemonData={pokemonData}/>

    );
};

export default PokemonDetail;
