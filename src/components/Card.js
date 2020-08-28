import React from 'react';

import './Card.css';

const Card = ({
    id,
    name,
    type,
    manaCost,
    text,
    flavor,
    imageUrl,
    addCardToDeck,
    removeCardFromDeck
}) => {
    return (
        <div className="Card">
            <div className="info">
                <p className="header">
                    {name} - {manaCost}
                </p>
                <p className="type">
                    {type}
                </p>
                <p className="text">
                    {text}
                </p>
                <p className="flavor">
                    {flavor}
                </p>
            </div>
            <img className="preview" src={imageUrl} />
            <div className="actions">
                <button className="glow-on-hover"
                    onClick={() => {
                        addCardToDeck({
                            id,
                            name
                        })
                    }}>
                    (+) Add To Deck
          </button>
                <button className="glow-on-hover"
                    onClick={() => {
                        removeCardFromDeck({
                            id
                        })
                    }}>
                    (-) Remove From Deck
        </button>
            </div>
        </div>
    );
}

export default Card;