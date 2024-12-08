// src/PokemonList.js
import React, { useEffect, useState } from 'react';
import useSWR from 'swr';
import './PokemonList.css';
import ButtonNextPreview from './ButtonNextPreview/ButtonNextPreview';
import PokemonCard from "./PokemonCard/PokemonCard";
import Loader from './LoadingUI/LoadingUI';
import Searchbar from "./Searchbar/Searchbar";

const fetcher = (url) => fetch(url).then((res) => res.json());

const PokemonList = () => {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?offset=360&limit=18');
    const { data } = useSWR(url, fetcher, { revalidateOnFocus: false });
    const [pokemonDetails, setPokemonDetails] = useState([]);
    const handleNext = () => {
        if (data && data.next) {
            setUrl(data.next);
        }
    };

    const handlePreview = () => {
        if (data && data.previous) {
            setUrl(data.previous);
        }
    };
    const getPokemonDetails = async (pokemonList) => {
        const detailsPromises = pokemonList.map((pokemon) =>
            fetch(pokemon.url).then((res) => res.json())
        );
        const details = await Promise.all(detailsPromises);
        setPokemonDetails(details);
    };

    useEffect(() => {
        if (data && data.results) {
            getPokemonDetails(data.results);
        }
    }, [data]);
    if (!data) return <div><Loader></Loader></div>;

    return (
        <div>
            <div className="title-container">
                <h1 className="title-tile">Liste des Pokémon</h1>
                <ButtonNextPreview onNext={handleNext} onPreview={handlePreview}/>
            </div>
            <Searchbar></Searchbar>
            <div className="pokemon-list">
                {pokemonDetails.map((pokemon) => (
                    <PokemonCard key={pokemon.id} pokemon={pokemon}/> // Passer les détails du Pokémon à PokemonCard
                ))}
            </div>
        </div>
    );
};

export default PokemonList;
