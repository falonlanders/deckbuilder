import React from 'react';
import './Deck.css';

const DeckList = ({
    deck,
    addCardToDeck,
    removeCardFromDeck
}) => {
    let cardCount = deck.reduce((cardCount, card) => {
        return cardCount + card.count
    }, 0);

    return (
        <div id="deck">
            <h3>Your deck so far ({cardCount} cards):</h3>
            <div className="DeckList">
                {deck.map(({ id, name, count }) => (
                    <p key={id}>
                        <span>
                            ({count}x) {name}
                        </span><br />
                        <button class="plusMinus" onClick={
                            () => addCardToDeck({ id, name })
                        }> + </button>
                        <button class="plusMinus" onClick={
                            () => removeCardFromDeck({ id })
                        }> - </button>
                    </p>
                ))}
            </div>
        </div>
    );
}

export default DeckList;