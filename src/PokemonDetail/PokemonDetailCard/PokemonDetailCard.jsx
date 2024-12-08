import React, { useState, useEffect } from 'react';
import './PokemonDetailCard.css';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import AutorenewTwoToneIcon from '@mui/icons-material/AutorenewTwoTone';
import PokemonDetailCardStat from "./PokemonDetailCardStat/PokemonDetailCardStat";

const PokemonDetailCard = ({ pokemonData }) => {
    const [isShiny, setIsShiny] = useState(false);
    const [isBack, setIsBack] = useState(false);
    const [pokemonDescription, setPokemonDescription] = useState('');

    // Fonction pour récupérer la description du Pokémon
    useEffect(() => {
        const fetchDescription = async () => {
            try {
                const response = await fetch(pokemonData.species.url); // API species pour description
                const speciesData = await response.json();

                // Trouver la description en anglais
                const descriptionEntry = speciesData.flavor_text_entries.find(
                    (entry) => entry.language.name === 'en'
                );
                setPokemonDescription(descriptionEntry.flavor_text);
            } catch (error) {
                console.error('Erreur lors de la récupération de la description:', error);
            }
        };

        fetchDescription();
    }, [pokemonData.species.url]);

    // Fonction pour obtenir le bon sprite (avant ou arrière, shiny ou non)
    const getSprite = () => {
        let baseSprite = isBack ? pokemonData.sprites.back_default : pokemonData.sprites.front_default;
        if (isShiny) {
            return isBack ? pokemonData.sprites.back_shiny : pokemonData.sprites.front_shiny;
        }
        return baseSprite;
    };

    // Bascule pour tourner l'image avant/arrière
    const toggleView = () => {
        setIsBack(!isBack);
    };

    return (
        <div className="detail-card">
            <div className="left-section">
                <h1 className="detail-name">{pokemonData.name}</h1>

                {/* Bouton pour tourner l'image (Autorenew Icon) */}
                <div
                    className="rotate-button"
                    onClick={toggleView}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                    <AutorenewTwoToneIcon fontSize="large" color="primary" />
                    <span style={{ marginLeft: '8px', fontSize: '16px', fontWeight: 'bold' }}>
                        {isBack ? "Back View" : "Front View"}
                    </span>
                </div>

                {/* Icône pour activer/désactiver Shiny */}
                <div
                    className="shiny-toggle"
                    onClick={() => setIsShiny(!isShiny)}
                    style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }}
                >
                    {isShiny ? (
                        <RadioButtonCheckedIcon fontSize="large" color="primary" />
                    ) : (
                        <RadioButtonUncheckedIcon fontSize="large" color="primary" />
                    )}
                    <span style={{ marginLeft: '8px', fontSize: '16px', fontWeight: 'bold' }}>Shiny</span>
                </div>

                {/* Image du Pokémon */}
                <div className="sprite-container">
                    <img className="detail-image" src={getSprite()} alt={pokemonData.name} />
                </div>

                {/* Affichage des types */}
                <div className="detail-types">
                    {pokemonData.types.map(typeInfo => (
                        <span key={typeInfo.type.name} className={`detail-type ${typeInfo.type.name}`}>
                            {typeInfo.type.name}
                        </span>
                    ))}
                </div>
            </div>


            <div className="right-section">
                <div className="detail-description">
                    <h3>Description</h3>
                    <p>{pokemonDescription}</p>
                </div>

                <div className="detail-details">
                    <p><strong>Height:</strong> {pokemonData.height}</p>
                    <p><strong>Weight:</strong> {pokemonData.weight}</p>
                    <p><strong>Abilities:</strong> {pokemonData.abilities.map(ability => ability.ability.name).join(', ')}</p>
                    <p><strong>Base Experience:</strong> {pokemonData.base_experience}</p>
                </div>


                <PokemonDetailCardStat stats={pokemonData.stats} />
            </div>
        </div>
    );
};

export default PokemonDetailCard;
