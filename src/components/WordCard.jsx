import React from 'react';

const WordCard = ({ card, isSelected, onClick }) => (
    <div
        className={`word-card ${isSelected ? 'selected' : ''} ${card.matched ? 'matched' : ''}`}
        onClick={onClick}
    >
        {card.matched || isSelected ? card.word : '?'}
    </div>
);

export default WordCard;
