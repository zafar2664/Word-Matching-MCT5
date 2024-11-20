import React, { useEffect, useState } from "react";
import WordCard from "./WordCard";

const GameBoard = ({ config, attempts, setAttempts, resetGame }) => {
  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [pairs, setPairs] = useState({}); // To track pairs and their connections

  useEffect(() => {
    const wordPairs = [
      { word1: "Kenya", word2: "Nairobi" },
      { word1: "India", word2: "Delhi" },
      { word1: "France", word2: "Paris" },
      { word1: "Italy", word2: "Rome" },
      { word1: "Japan", word2: "Tokyo" },
      { word1: "Germany", word2: "Berlin" },
      { word1: "Brazil", word2: "Brasilia" },
      { word1: "Australia", word2: "Canberra" },
    ];

    const flattenedWords = wordPairs
      .flatMap((pair) => [pair.word1, pair.word2])
      .sort(() => Math.random() - 0.5);

    setPairs(
      wordPairs.reduce((acc, pair) => {
        acc[pair.word1] = pair.word2;
        acc[pair.word2] = pair.word1;
        return acc;
      }, {})
    );

    setCards(
      flattenedWords.map((word, index) => ({
        id: index,
        word,
        matched: false,
      }))
    );
    setSelectedCards([]);
  }, [resetGame]);

  const handleCardClick = (cardId) => {
    if (selectedCards.length === 2 || cards[cardId].matched) return;

    const newSelected = [...selectedCards, cardId];
    setSelectedCards(newSelected);

    if (newSelected.length === 2) {
      const [firstCard, secondCard] = newSelected.map((id) => cards[id]);

      setAttempts(attempts + 1);

      // Check if the two selected cards are a match
      if (pairs[firstCard.word] === secondCard.word) {
        setCards((prevCards) =>
          prevCards.map((card) =>
            newSelected.includes(card.id) ? { ...card, matched: true } : card
          )
        );
      }

      // Reset selection after a short delay
      setTimeout(() => setSelectedCards([]), 1000);
    }
  };

  return (
    <div
      className="game-board"
      style={{
        gridTemplateColumns: `repeat(${config.columns}, 1fr)`,
      }}
    >
      {cards.map((card) => (
        <WordCard
          key={card.id}
          card={card}
          isSelected={selectedCards.includes(card.id)}
          onClick={() => handleCardClick(card.id)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
