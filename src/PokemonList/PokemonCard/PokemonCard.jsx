// src/PokemonCard.js
import React from 'react';
import './PokemonCard.css';
import { Link } from 'react-router-dom';

const formatPokemonNumber = (number) => {
    return String(number).padStart(3, '0');
};

const PokemonCard = ({ pokemon }) => {
    return (
        <Link to={`/pokemon/${pokemon.name}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <div className="pokemon-card">
            <p className="pokemon-number">No.{formatPokemonNumber(pokemon.id)}</p>
            <h3 className="pokemon-name">{pokemon.name}</h3>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />

            <div className="pokemon-types">
                {pokemon.types.map((type) => (
                    <span key={type} className={`type ${type.type.name.toLowerCase()}`}>
                        {type.type.name}
                    </span>
                ))}
            </div>
        </div>
        </Link>
    );
};

export default PokemonCard;
