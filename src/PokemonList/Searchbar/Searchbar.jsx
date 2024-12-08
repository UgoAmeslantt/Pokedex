// src/PokemonSearch.js
import React, { useState } from 'react';
import './Searchbar.css';
import PokemonCard from '../PokemonCard/PokemonCard';

const PokemonSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [pokemonData, setPokemonData] = useState(null);
    const [error, setError] = useState(null);

    // Fonction de recherche
    const handleSearch = async () => {
        if (searchTerm.length> 0) {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
                if (!response.ok) {
                    throw new Error("Pokémon non trouvé");
                }
                const data = await response.json();
                setPokemonData(data);
                setError(null);
            } catch (err) {
                setError(err.message);
                setPokemonData(null);
            }
        }
    };

    return (
        <div className="pokemon-search">
            <div className="search-bar">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Rechercher un Pokémon..."
                />
                <button onClick={handleSearch}>Rechercher</button>
            </div>

            {error && <div className="error">{error}</div>}

            {pokemonData && (

                <PokemonCard key={pokemonData.id} pokemon={pokemonData} />
            )}
        </div>
    );
};

export default PokemonSearch;
